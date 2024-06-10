import { Theme } from "@mui/material/styles";

export default function Forms(theme: Theme): Theme["components"] {
  return {
    MuiFormControl: {},
    MuiFormControlLabel: {},
    MuiFormGroup: {},
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: "4px",
          marginTop: "4px",
          fontWeight: "400",
          fontSize: "13px",
          lineHeight: "13px",
          whiteSpace: "pre-line",
          letterSpacing: "0.07px",
          color: theme.palette.red[500],
          "&.Mui-error": {
            color: theme.palette.red[500],
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: "5px",
          fontWeight: "400",
          fontSize: "14px",
          color: theme.palette.neutralDark.main,
          lineHeight: "100%",
        },
        focused: {
          color: theme.palette.label.primary,
        },
        asterisk: {
          color: theme.palette.red[500],
        },
      },
    },
  };
}
