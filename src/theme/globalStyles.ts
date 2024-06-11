import { GlobalStylesProps } from "@mui/system";

const globalStyles: GlobalStylesProps["styles"] = {
  "*": {
    boxSizing: "border-box",
    WebkitAppearance: "none",
  },
  "*::-webkit-scrollbar": {
    width: "5px",
    height: "8px",
    position: "absolute",
    backgroundColor: "transparent",
  },
  "*::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.10)",
    borderRadius: 0,
  },
  html: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    WebkitOverflowScrolling: "touch",
  },
  body: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  "#root": {
    width: "100%",
    height: "100%",
  },
  input: {
    "&[type=number]": {
      MozAppearance: "textfield",
      "&::-webkit-outer-spin-button": {
        margin: 0,
        WebkitAppearance: "none",
      },
      "&::-webkit-inner-spin-button": {
        margin: 0,
        WebkitAppearance: "none",
      },
    },
  },
  "cursor-pointer": {
    cursor: "pointer",
  },
  ":root": {},
};

export default globalStyles;
