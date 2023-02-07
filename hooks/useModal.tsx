import React, { useCallback, useMemo, useState } from 'react';
import { Backdrop, Box, CircularProgress, styled } from '@mui/material';
import Modal from '@mui/material/Modal';
import { themes } from 'theme';
import { SubmitEnquiryModal } from 'components/modals';

export const MODAL_TYPES = {
  SUBMIT_ENQUIRY_MODAL: SubmitEnquiryModal,
};

type OpenModalState = {
  modalType: any;
  data?: any;
};

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

type UseModalProps = {
  isLoading?: boolean;
  additionalStyles?: any;
};

const useModal = ({ isLoading, additionalStyles = {} }: UseModalProps) => {
  const [openModal, setOpenModal] = useState<OpenModalState | null>(null);
  const onHandleCloseModal = useCallback(() => {
    setOpenModal(null);
  }, []);
  const renderModal = useMemo(() => {
    const { modalType: ModalComponent, data } = openModal ?? {};
    if (ModalComponent) {
      return (
        <StyledModal
          open={!!openModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          onClose={onHandleCloseModal}
          closeAfterTransition
          sx={{
            zIndex: theme => {
              return theme.zIndex.appBar + 1;
            },
          }}
        >
          <Box sx={{ ...style, ...additionalStyles }}>
            {isLoading && (
              <Backdrop
                sx={{
                  color: themes.light.colorWhite,
                }}
                open={true}
              >
                <CircularProgress color='inherit' />
              </Backdrop>
            )}
            <ModalComponent data={data} onCloseModal={onHandleCloseModal} />
          </Box>
        </StyledModal>
      );
    }
    return null;
  }, [additionalStyles, isLoading, onHandleCloseModal, openModal]);

  return { renderModal, setOpenModal };
};

export default useModal;
