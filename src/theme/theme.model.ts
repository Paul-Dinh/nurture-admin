import React from "react";

declare module "@mui/material/styles" {
  interface CustomPalette {
    primary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
    };
    neutralLight: {
      main: string;
      1000: string;
      900: string;
      800: string;
      700: string;
      600: string;
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
    };
    neutralDark: {
      main: string;
      1000: string;
      900: string;
      800: string;
      700: string;
      600: string;
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
    };

    gray: {
      main: string;
      50: string;
      70: string;
      dark: string;
      f7: string;
    };

    black: {
      main: string;
      50: string;
      70: string;
    };
    white: {
      light: string;
      dark: string;
    };
    blue: {
      light: string;
      dark: string;
    };
    green: {
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
    };
    red: {
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
    };
    yellow: {
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
    };
    grey1: {
      light: string;
      dark: string;
    };
    grey2: {
      light: string;
      dark: string;
    };
    grey3: {
      light: string;
      dark: string;
    };
    grey4: {
      light: string;
      dark: string;
    };
    grey5: {
      light: string;
      dark: string;
    };
    grey6: {
      light: string;
      dark: string;
    };
    grey7: {
      light: string;
    };
    grey8: {
      light: string;
    };
    label: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
    };
    seperators: {
      non_opaque: string;
      opaque: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      placeholder: string;
      disabled: string;
    };
    other: {
      stroke: string;
      disable_shades_50: string;
    };
    backgrounds: {
      primary: string;
      light1: string;
      light2: string;
      light3: string;
      25: string;
      tertiary: string;
      activeMenu: string;
    };
  }
  interface CustomTypeBackground {
    light: string;
    dark: string;
  }
  interface CustomTypeText {
    light: string;
    dark: string;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface TypeBackground extends CustomTypeBackground {}
  interface TypeText extends CustomTypeText {}

  interface TypographyVariants {
    Bold_24: React.CSSProperties;
    Bold_22: React.CSSProperties;
    Bold_18: React.CSSProperties;
    Bold_14: React.CSSProperties;

    Semibold_20: React.CSSProperties;
    Semibold_16: React.CSSProperties;

    Reg_16: React.CSSProperties;
    Reg_15: React.CSSProperties;
    Reg_14: React.CSSProperties;
    Reg_13: React.CSSProperties;
    Reg_12: React.CSSProperties;
    Reg_10: React.CSSProperties;

    Light_16: React.CSSProperties;
    Light_15: React.CSSProperties;
    Light_14: React.CSSProperties;
    Light_12: React.CSSProperties;

    Order_18: React.CSSProperties;
    Order_16: React.CSSProperties;
    Order_14: React.CSSProperties;
    Order_12: React.CSSProperties;

    Components_Button: React.CSSProperties;
    Components_Column_tittle: React.CSSProperties;
    Components_Column_content: React.CSSProperties;
    Components_UnstyledContainer: React.CSSProperties;

    Hashtag: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    Bold_24: React.CSSProperties;
    Bold_22: React.CSSProperties;
    Bold_18: React.CSSProperties;
    Bold_16: React.CSSProperties;
    Bold_14: React.CSSProperties;

    Semibold_20: React.CSSProperties;
    Semibold_16: React.CSSProperties;

    Reg_16: React.CSSProperties;
    Reg_15: React.CSSProperties;
    Reg_14: React.CSSProperties;
    Reg_13: React.CSSProperties;
    Reg_12: React.CSSProperties;
    Reg_10: React.CSSProperties;

    Light_16: React.CSSProperties;
    Light_15: React.CSSProperties;
    Light_14: React.CSSProperties;
    Light_12: React.CSSProperties;

    Order_18: React.CSSProperties;
    Order_16: React.CSSProperties;
    Order_14: React.CSSProperties;
    Order_12: React.CSSProperties;

    Components_Button?: React.CSSProperties;
    Components_Column_tittle?: React.CSSProperties;
    Components_Column_content?: React.CSSProperties;
    Components_UnstyledContainer?: React.CSSProperties;

    Hashtag: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    Bold_24: true;
    Bold_22: true;
    Bold_18: true;
    Bold_16: true;
    Bold_14: true;

    Semibold_20: true;
    Semibold_16: true;

    Reg_16: true;
    Reg_15: true;
    Reg_13: true;
    Reg_14: true;
    Reg_12: true;
    Reg_10: true;

    Light_16: true;
    Light_15: true;
    Light_14: true;
    Light_12: true;

    Order_18: true;
    Order_16: true;
    Order_14: true;
    Order_12: true;

    Components_Button: true;
    Components_Column_tittle: true;
    Components_Column_content: true;
    Components_UnstyledContainer: true;

    Hashtag: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
    brand: true;
  }
}

export {};
