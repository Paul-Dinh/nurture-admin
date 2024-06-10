import { Theme } from "@mui/material/styles";

export default function Divider(theme: Theme): Theme["components"] {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.grey7.light,
          opacity: 1,
        },
      },
    },
  };
}
