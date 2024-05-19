import baseTheme from "../base";

const MuiTableCell = {
  defaultProps: {},
  styleOverrides: {
    root: {
      paddingBlock: "8px",
      position: "relative",
    },
    head: {
      ...baseTheme.typography["body1"],
      color: baseTheme.palette.secondary.main,
      backgroundColor: baseTheme.palette.grey[100],
      textTransform: "uppercase",
      fontWeight: "bold",
      paddingBlock: "16px",
      borderBottom: 0,
    },
  },
};

export default MuiTableCell;
