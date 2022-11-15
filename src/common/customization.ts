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
      main: "#2F366B",
      light: "#888DB8",
      dark: "#17181F",
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
