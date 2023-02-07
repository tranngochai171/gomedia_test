import { ReactElement, useMemo, Fragment, useRef } from 'react';
import Layout from 'components/layouts/layout';
import { NextPageWithLayout } from './_app';
import { useGetProjects } from 'hooks/useProjects';
import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  CircularProgress,
} from '@mui/material';
import { Text18Weight500 } from 'components/layouts/common/styled/typography-styed';
import ProductCard from 'components/layouts/common/product-card.tsx/product-card';
import { ProductItemListType } from 'types/product.type';
import MySelect from 'components/layouts/common/select/my-select';
import commonConstants from 'constants/common.constant';
import RangeSlider from 'components/layouts/common/slider/my-slider';
import formatUtil from 'utils/format.util';

const StyledStack = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 20,
});

const Page: NextPageWithLayout = () => {
  const {
    query: {
      data,
      fetchNextPage,
      hasNextPage,
      fetchPreviousPage,
      hasPreviousPage,
      isFetching,
    },
    resetAllFilter,
    onHandleChangeKeyword,
    keyword,
    order,
    onHandleChangeOrder,
    sort,
    onHandleChangeSort,
    max_price,
    min_price,
    onHandleChangePrice,
  } = useGetProjects();
  const searchRef = useRef<HTMLInputElement>(null);
  const content = useMemo(() => {
    const pages = data?.pages ?? [];
    if (pages?.[0]?.count === 0) {
      return <Text18Weight500>No Available Data</Text18Weight500>;
    }
    return (
      <StyledStack>
        {pages.map((page: any, index: number) => (
          <Fragment key={index}>
            {page?.projects?.map(
              (project: ProductItemListType, index: number) => (
                <ProductCard key={`${index}_${project?.id}`} {...project} />
              ),
            )}
          </Fragment>
        ))}
      </StyledStack>
    );
  }, [data]);
  return (
    <Box p={3}>
      {isFetching ? (
        <Box sx={{ position: 'fixed', top: 64, right: 20 }}>
          <CircularProgress />
        </Box>
      ) : null}
      <Stack gap={4}>
        <Stack direction='row' gap={4} flexWrap='wrap' alignItems='center'>
          <MySelect
            label='Order'
            options={commonConstants.PROJECTS_ORDER_OPTIONS}
            onChange={onHandleChangeOrder}
            value={order}
          />
          <MySelect
            label='Sort'
            options={commonConstants.PROJECTS_SORT_OPTIONS}
            onChange={onHandleChangeSort}
            value={sort}
          />
          <RangeSlider
            label='Price'
            step={commonConstants.PROJECTS_PRICE_MIN_MAX.STEP}
            minValue={min_price}
            maxValue={max_price}
            min={commonConstants.PROJECTS_PRICE_MIN_MAX.MIN}
            max={commonConstants.PROJECTS_PRICE_MIN_MAX.MAX}
            marks={[
              {
                value: commonConstants.PROJECTS_PRICE_MIN_MAX.MIN,
                label: formatUtil.formatCurrency(
                  commonConstants.PROJECTS_PRICE_MIN_MAX.MIN,
                ),
              },
              {
                value: commonConstants.PROJECTS_PRICE_MIN_MAX.MID,
                label: formatUtil.formatCurrency(
                  commonConstants.PROJECTS_PRICE_MIN_MAX.MID,
                ),
              },
              {
                value: commonConstants.PROJECTS_PRICE_MIN_MAX.MAX,
                label: formatUtil.formatCurrency(
                  commonConstants.PROJECTS_PRICE_MIN_MAX.MAX,
                ),
              },
            ]}
            onChange={onHandleChangePrice}
          />
        </Stack>
        <Stack direction='row' gap={2} flexWrap='wrap'>
          <TextField
            inputRef={searchRef}
            label='Title Search...'
            onChange={onHandleChangeKeyword}
            defaultValue={keyword}
          />
          <Button
            onClick={() => {
              // @ts-ignore
              searchRef.current.value = '';
              resetAllFilter();
            }}
          >
            Reset
          </Button>
        </Stack>
        {hasPreviousPage && (
          <StyledStack>
            <Button variant='contained' onClick={() => fetchPreviousPage()}>
              Load Previous
            </Button>
          </StyledStack>
        )}
        {content}
        {hasNextPage ? (
          <StyledStack>
            <Button variant='contained' onClick={() => fetchNextPage()}>
              Load more
            </Button>
          </StyledStack>
        ) : null}
      </Stack>
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
