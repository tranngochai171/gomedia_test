import Layout from 'components/layouts/layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { GetStaticPaths, GetStaticProps } from 'next';
import projectService from 'services/project.service';
import { ProductItemListType } from 'types/product.type';
import { Stack } from '@mui/material';
import MyCarousel from 'components/carousel/carousel';
import PDFTable from 'components/pdf-table/pdf-table';
import { Text48Weight700 } from 'components/styled/typography-styed';
import { StyledLoadingButton } from 'components/styled/common-styled';
import useModal, { MODAL_TYPES } from 'hooks/useModal';

const Page: NextPageWithLayout<ProductItemListType, {}> = ({
  pdfs,
  photos,
  title,
}) => {
  const { renderModal, setOpenModal } = useModal({});

  return (
    <Stack sx={{ py: 4 }} gap={4}>
      {renderModal}
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Text48Weight700>{title}</Text48Weight700>
        <StyledLoadingButton
          variant='contained'
          onClick={() => {
            setOpenModal({ modalType: MODAL_TYPES.SUBMIT_ENQUIRY_MODAL });
          }}
        >
          Enquiry Submission
        </StyledLoadingButton>
      </Stack>
      {photos?.length > 0 ? (
        <MyCarousel images={photos?.map(item => item.url)} />
      ) : null}
      <PDFTable pdfs={pdfs} />
    </Stack>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async context => {
  try {
    const id = context?.params?.id;
    if (!id) {
      throw new Error();
    }
    const response: ProductItemListType = await projectService.getProject(+id);
    return {
      props: { ...response },
      revalidate: 200,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
