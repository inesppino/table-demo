import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const typography = {
  h1: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: 600,
    lineHeight: 1.1,
    "@media (min-width:600px)": {
      fontSize: theme.typography.pxToRem(40),
    },
  },
  h2: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 400,
    lineHeight: 1.1,
    "@media (min-width:600px)": {
      fontSize: theme.typography.pxToRem(30),
    },
  },
  body1: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400,
    lineHeight: 1.4,
  },
  button: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 600,
    letterSpacing: "-0.01em",
    lineHeight: 1.3,
  },
};

export default typography;
