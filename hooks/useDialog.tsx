import { Box, Modal, Stack, Typography } from '@mui/material';
import {
  StyledLoadingButton,
  StyledOutlinedLoadingButton,
} from 'components/styled/common-styled';
import { useState } from 'react';
import { themes } from 'theme';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 3,
  borderRadius: 1,
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

type UseDialogParams = {
  onHandleAction: Function;
  isLoading?: boolean;
};

type DialogContentType = {
  title?: string | JSX.Element;
  subText?: string | JSX.Element;
  noText?: string | JSX.Element;
  yesText?: string | JSX.Element;
};

const useDialog = ({ onHandleAction, isLoading }: UseDialogParams) => {
  const [dialog, setDialog] = useState<DialogContentType | null>(null);
  const onHandleOpenDialog = (payload: DialogContentType) => {
    setDialog(payload);
  };

  const onHandleCloseDialog = () => {
    setDialog(null);
  };
  const renderModal = (
    <Modal
      open={!!dialog}
      onClose={onHandleCloseDialog}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'
    >
      <Box sx={style}>
        {dialog?.title ? (
          typeof dialog?.title === 'string' ? (
            <Typography
              align='left'
              id='modal-modal-title'
              variant='h6'
              component='h2'
              sx={{ fontSize: '1.5rem' }}
            >
              {dialog?.title}
            </Typography>
          ) : (
            dialog?.title
          )
        ) : null}

        <Typography
          align='left'
          variant='subtitle1'
          sx={{ color: themes.light.colorGray, fontWeight: 500 }}
        >
          {dialog?.subText}
        </Typography>
        <Stack
          direction='row'
          justifyContent='space-between'
          gap={2}
          flexWrap='wrap'
        >
          <StyledOutlinedLoadingButton
            loading={isLoading}
            variant='contained'
            onClick={onHandleCloseDialog}
            sx={{ width: 260, height: 51, fontSize: 16 }}
          >
            {dialog?.noText ? dialog.noText : 'No, Cancel'}
          </StyledOutlinedLoadingButton>
          <StyledLoadingButton
            loading={isLoading}
            variant='contained'
            sx={{ width: 260, height: 51, fontSize: 16 }}
            onClick={() => onHandleAction()}
          >
            {dialog?.yesText ? dialog.yesText : 'Yes, Confirm'}
          </StyledLoadingButton>
        </Stack>
      </Box>
    </Modal>
  );
  return {
    onHandleOpenDialog,
    onHandleCloseDialog,
    renderModal,
  };
};

export default useDialog;
