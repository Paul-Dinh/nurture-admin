import type { ThemeOptions } from "@mui/material/styles";

// import { createBreakpoints } from '@mui/system';

// const breakpoints = createBreakpoints({});
/**
 * Style overrides for Material UI components.
 *
 * @see https://mui.com/customization/theme-components/#global-style-overrides
 */
export const typography: ThemeOptions["typography"] = {
  fontFamily: ["Roboto", "sans-serif"].join(","),
  //bold
  Bold_24: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
  Bold_22: {
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "125%",
  },
  Bold_18: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "125%",
  },
  Bold_16: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "100%",
  },
  Bold_14: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "14px",
  },

  //semibold
  Semibold_20: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "20px",
  },
  Semibold_16: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "16px",
  },

  //reg
  Reg_16: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px",
  },
  Reg_15: {
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "15px",
  },
  Reg_14: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "14px",
  },
  Reg_13: {
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "13px",
  },
  Reg_12: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "12px",
  },
  Reg_10: {
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "10px",
  },

  //Light

  Light_16: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "21.79px",
  },
  Light_15: {
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "20.43px",
  },
  Light_14: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "19.07px",
  },
  Light_12: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "16.34px",
  },

  //Order
  Order_18: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "-0.41px",
  },
  Order_16: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
  },
  Order_14: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px",
  },
  Order_12: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "12px",
    letterSpacing: "3%",
  },

  // components
  Components_Button: {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "14px",
    fontStyle: "normal",
  },
  Components_Column_tittle: {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: "0.1px",
  },
  Components_Column_content: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: "0.1px",
  },
  Components_UnstyledContainer: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.25px",
  },

  //hashtag
  Hashtag: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
};
