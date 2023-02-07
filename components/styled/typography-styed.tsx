import { Button, styled, Typography } from '@mui/material';
import { themes } from 'theme';

// Font Size 48
export const Text48Weight700 = styled(Typography)({
  fontWeight: 500,
  fontSize: '48px',
  color: themes.light.colorDune,
});

// Font Size 28
export const Text28Weight600 = styled(Typography)({
  fontWeight: 600,
  fontSize: '28px',
  color: themes.light.colorDune,
});

// Font Size 18
export const Text18Weight500 = styled(Typography)({
  fontWeight: 500,
  fontSize: '18px',
  color: themes.light.colorDune,
});
export const Text18Weight400 = styled(Typography)({
  fontWeight: 400,
  fontSize: '18px',
  color: themes.light.colorDune,
});

// Font Size 16
export const Text16Weight400 = styled(Typography)({
  fontWeight: 400,
  fontSize: '16px',
  color: themes.light.colorDune,
});
export const Text16Weight400Gray = styled(Typography)({
  fontWeight: 400,
  fontSize: '16px',
  color: themes.light.colorGray,
});
export const Text16Weight500 = styled(Typography)({
  fontWeight: 500,
  fontSize: '16px',
  color: themes.light.colorDune,
});
export const Text16Weight500Gray = styled(Typography)({
  fontWeight: 500,
  fontSize: '16px',
  color: themes.light.colorGray,
});
export const Text16Weight600 = styled(Typography)({
  fontWeight: 600,
  fontSize: '16px',
  color: themes.light.colorDune,
});
export const Text16Weight600Gray = styled(Typography)({
  fontWeight: 600,
  fontSize: '16px',
  color: themes.light.colorGray,
});

// Font Size 14
export const Text14Weight500 = styled(Typography)({
  fontWeight: 500,
  fontSize: '14px',
  color: themes.light.colorDune,
});
export const Text14Weight400 = styled(Typography)({
  fontWeight: 400,
  fontSize: '14px',
  color: themes.light.colorDune,
});
export const Text14Weight500Gray = styled(Typography)({
  fontWeight: 500,
  fontSize: '14px',
  color: themes.light.colorGray,
});
export const Text14Weight400Gray = styled(Typography)({
  fontWeight: 400,
  fontSize: '14px',
  color: themes.light.colorGray,
});

// Font Size 12
export const Text12Weight500Gray = styled(Typography)({
  fontWeight: 500,
  fontSize: '12px',
  color: themes.light.colorGray,
});
export const Text12Weight600 = styled(Typography)({
  fontWeight: 600,
  fontSize: '12px',
  color: themes.light.colorDune,
});

export const TextButton = styled(Button)({
  display: 'flex',
  textTransform: 'unset',
  fontSize: '1rem',
});

export const CommonTitleText = styled('span')({
  fontWeight: 500,
  fontSize: '48px',
  WebkitBoxDecorationBreak: 'clone',
  fontFamily: themes.light.fontNeueHaasGroteskDisplayPro,
  color: themes.light.colorWhite,
  backgroundColor: themes.light.colorRoyalHeath,
  padding: '.3rem .8rem',
  lineHeight: 1.5,
});

export const CommonErrorText16Weight500 = styled(Text16Weight500)({
  color: themes.light.colorElectricRed,
});
export const CommonErrorText14Weight500 = styled(Text14Weight500)({
  color: themes.light.colorElectricRed,
});
