import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(3, 123, 53, 1)",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default theme;
