import { createTheme } from "@mui/material/styles";
import { esES } from "@mui/material/locale";

import baseTheme from "./base";
import components from "./components";

const theme = createTheme(baseTheme, { components }, esES);

export default theme;
