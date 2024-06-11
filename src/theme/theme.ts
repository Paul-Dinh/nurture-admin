import { createTheme } from '@mui/material/styles';

import ComponentsOverrides from './overrides';

import './theme.model';

import { typography } from './typography';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#390099', //Primary/Dark Green
      light: ' #70ba2b', //Primary/Light Green
      dark: '#10253f', //Primary/Dark
      contrastText: '#39009929', //Primary/Background
    },
    error: {
      main: '#FF0000',
    },
    secondary: {
      main: '#FA5E92', //Secondary/Red/500
    },
    gray: {
      main: '#000000',
      50: 'rgba(0, 0, 0, 0.50)',
      70: 'rgba(0, 0, 0, 0.70)',
      dark: '#90919C1A',
      f7: '#7F7F7F',
    },
    grey1: {
      light: '#666666',
      dark: '#666666',
    },
    black: {
      main: '#000000',
      50: 'rgba(0, 0, 0, 0.50)',
      70: 'rgba(0, 0, 0, 0.70)',
    },
    white: {
      light: '#FFFFFF',
      dark: '#FFFFFF',
    },
    neutralLight: {
      main: '#FFFFFF', //Neutral Light/0
      1000: '#434851', //Neutral Light/1000
      900: '#505661', //Neutral Light/900
      800: '#5d6571', //Neutral Light/800
      700: '#6a7382', //Neutral Light/700
      600: '#738496', //Neutral Light/600
      500: '#8590A2', //Neutral Light/500
      400: '#B3B9C4', //Neutral Light/400
      300: '#DCDFE4', //Neutral Light/300
      200: '#F1F2F4', //Neutral Light/200
      100: '#F7F8F9', //Neutral Light/100
    },
    neutralDark: {
      main: '#000', //Neutral Dark/0
      1000: '#c7d1db', //Neutral Dark/1000
      900: '#b6c2cf', //Neutral Dark/900
      800: '#9fadbc', //Neutral Dark/800
      700: '#8696a7', //Neutral Dark/700
      600: '#738496', //Neutral Dark/600
      500: '#596773', //Neutral Dark/500
      400: '#454f59', //Neutral Dark/400
      300: '#2c333a', //Neutral Dark/300
      200: '#22272b', //Neutral Dark/200
      100: '#1d2125', //Neutral Dark/100
    },

    background: {
      light: '#FAFAFA',
      dark: '#EEECEC',
      default: '#FFF',
    },

    blue: {
      light: '#0073EA',
      dark: '#0073EA',
    },
    green: {
      500: '#6ee47a', //Secondary/Green/500
      400: '#84e88e', //Secondary/Green/400
      300: '#99eca2', //Secondary/Green/300
      200: '#aff0b6', //Secondary/Green/200
      100: '#c5f4ca', //Secondary/Green/100
    },
    red: {
      500: '#e83939', //Secondary/Red/500
      400: '#eb5757', //Secondary/Red/400
      300: '#ef7474', //Secondary/Red/300
      200: '#f29292', //Secondary/Red/200
      100: '#f6b0b0', //Secondary/Red/100
    },
    yellow: {
      500: '#ffd12f', //Secondary/Yellow/500
      400: '#ffd84e', //Secondary/Yellow/400
      300: '#ffdf6d', //Secondary/Yellow/300
      200: '#ffe68d', //Secondary/Yellow/200
      100: '#ffedac', //Secondary/Yellow/100
    },

    grey2: {
      light: '#AEAEB2',
      dark: '#666',
    },
    grey3: {
      light: 'rgba(60, 60, 67, 0.60)',
      dark: 'rgba(0, 0, 0, 0.60)',
    },
    grey4: {
      light: '#D1D1D6',
      dark: '#3A3A3C',
    },
    grey5: {
      light: '#B6B6B6',
      dark: '#2C2C2E',
    },
    grey6: {
      light: '#F2F2F7',
      dark: '#1C1C1E',
    },
    grey7: {
      light: '#00000033',
    },
    grey8: {
      light: '#D9D9D9',
    },
    label: {
      primary: '#000000',
      secondary: 'rgba(60, 60, 67, 0.6)',
      tertiary: 'gba(60, 60, 67, 0.33)',
      quarternary: 'rgba(60, 60, 67, 0.18)',
    },
    seperators: {
      non_opaque: '#CECED1',
      opaque: 'rgba(206, 206, 209, 0.4)',
    },
    text: {
      primary: '#000000',
      secondary: '#545454',
    },
    other: {
      stroke: 'rgba(0, 0, 0, 0.08)',
      disable_shades_50: 'rgba(183, 183, 183, 0.5)',
    },
    backgrounds: {
      primary: '#fff',
      light1: '#DFE5F0',
      light2: '#EEF1F7',
      light3: '#F3F7FF',
      25: 'rgba(217, 217, 217, 0.25)',
      tertiary: '#EEECEC',
      activeMenu: 'rgba(0, 48, 135, 0.1)',
    },
  },
  typography,
});
theme.components = ComponentsOverrides(theme);

export default theme;
