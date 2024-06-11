import { Theme } from "@mui/material/styles";

export default function FormControl(theme: Theme) {
  return {
    MuiSwitch: {},
    MuiSelect: {},
    MuiAutocomplete: {},
    MuiRadio: {},
    MuiCheckbox: {},
    MuiInputBase: {},
    MuiInput: {},
    MuiFilledInput: {},
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          minWidth: 0,
          width: "100%",
          height: "48px",
          borderRadius: "5px",
          background: theme.palette.backgrounds.primary,
          "&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: `1px solid ${theme.palette.primary.light}`,
            },
          "&.Mui-readOnly": {},
          " &.Mui-disabled": {
            background: theme.palette.backgrounds.tertiary,
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${theme.palette.neutralLight[500]}`,
            },
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${theme.palette.red[500]}`,
          },
          "&.MuiInputBase-multiline": {
            height: "auto",
            padding: 0,
          },
          "&.MuiInputBase-adornedEnd": {
            paddingRight: "16px",
            "& .MuiInputBase-input": {
              paddingRight: 0,
            },
          },
        },
        input: {
          fontSize: "14px",
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "16px",
          letterSpacing: "0.25px",
          padding: "13px 15px",
          color: theme.palette.text.primary,
          "&::placeholder": {
            fontSize: "14px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "16px",
            letterSpacing: "0.25px",
            color: "#B6B6B6",
            opacity: 1,
          },
          borderRight: "none",
          "&.Mui-readOnly:not(.pir-datepicker), &.Mui-disabled": {
            WebkitTextFillColor: "unset",
          },
        },
        inputMultiline: {
          fontSize: "14px",
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "16px",
          letterSpacing: "0.25px",
          padding: "16px",
          color: theme.palette.text.primary,
          "&::placeholder": {
            fontSize: "14px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "16px",
            letterSpacing: "0.25px",
            color: "#B6B6B6",
            opacity: 1,
          },
          borderRight: "none",
          "&.Mui-readOnly, &.Mui-disabled": {
            WebkitTextFillColor: "unset",
          },
        },
        multiline: {
          height: "auto",
          padding: 0,
          "& .inputfield__limit": {
            marginRight: 16,
          },
        },
        notchedOutline: {
          border: `1px solid ${theme.palette.grey5.light}`,
        },
      },
    },
    MuiTextField: {},
  };
}
