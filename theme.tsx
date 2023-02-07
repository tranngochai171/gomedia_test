import { createTheme } from '@mui/material';

interface IObjectKeys {
  [key: string]: string;
}

const lightTheme: IObjectKeys = {
  fontInter: 'Inter',
  fontNeueHaasGroteskDisplayPro: 'Neue Haas Grotesk Display Pro',

  colorElectricRed: '#E10600',
  colorFashionFuchsia: '#E10098',
  colorDarkOrchid: '#963CBD',
  colorIslamicGreen: '#8C0077',
  colorMaximumBlueGreen: '#2CCCD3',
  colorVividYellow: '#FCE300',
  colorGorseYellow: '#FEF452',
  colorRoyalHeath: '#942F70',
  colorVividGamboge: '#FF9800',
  colorIrishGreen: '#008C15',
  colorChathamsBlue: '#14597A',
  colorMagnolia: '#F9F5FF',
  colorBoysenberry: '#942F70',
  colorSpanishGray: '#999999',
  colorWhite: '#FFFFFF',
  colorBlack: '#000000',
  colorLightGray: '#B4B4B4',
  colorGray: '#475467',
  colorSilver: '#C4C4C4',
  colorAlabaster: '#FAFAFA',
  colorPorcelain: '#F2F2F2',
  colorDune: '#333333',

  backgroundColorGray: 'rgba(0, 0, 0, 0.6)',
  backgroundColorBlack: 'rgba(0, 0, 0, 1)',
  backgroundColorWhite: 'rgba(255, 255, 255, 1)',
  backgroundColorDisabled: 'rgba(153, 153, 153, 1)',
  backgroundColorAlabaster: '#F9FAFC',

  borderColor: '#313131',
};

// export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  //add theme if customer like
};

export const themeMaterial = createTheme({
  palette: {
    // primary: {
    //   main: lightTheme.colorGorseYellow,
    //   contrastText: lightTheme.colorRoyalHeath,
    // },
    // secondary: {
    //   main: lightTheme.colorRoyalHeath,
    //   contrastText: lightTheme.colorWhite,
    // },
  },
  typography: {
    // fontFamily: ['Inter', 'Neue Haas Grotesk Display Pro'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
