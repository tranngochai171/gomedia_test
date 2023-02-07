import { styled } from '@mui/material';
import { themes } from 'theme';
import { LoadingButton } from '@mui/lab';

export const StyledLoadingButton = styled(LoadingButton)({
  height: '52px',
  textTransform: 'unset',
  backgroundColor: themes.light.backgroundColorBlack,
  '&:hover': {
    backgroundColor: themes.light.backgroundColorBlack,
  },
  '&:disabled': {
    backgroundColor: themes.light.backgroundColorDisabled,
    color: themes.light.colorWhite,
  },
});

export const StyledOutlinedLoadingButton = styled(StyledLoadingButton)({
  color: themes.light.colorBlack,
  backgroundColor: themes.light.backgroundColorWhite,
  border: `1px solid ${themes.light.colorBlack}`,
  '&:hover': {
    backgroundColor: themes.light.backgroundColorWhite,
  },
});
