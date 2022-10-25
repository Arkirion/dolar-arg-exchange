import { createTheme } from "@mui/material/styles";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
  },
  palette: {
    primary: {
      main: "#8be0d3",
      light: "#a2e6d9",
      dark: "#619c96",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#a0c922",
      light: "#b7d34e",
      dark: "#6f8c17",
      contrastText: "#000",
    },
  },
});
