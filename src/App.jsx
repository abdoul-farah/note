import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { green } from "@mui/material/colors";

import Root from "./pages/Root";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

import { loader as loaderNotes } from "./pages/Notes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Notes />, loader: loaderNotes },
      { path: "/create", element: <Create /> },
    ],
  },
]);

let theme = createTheme({
  palette: {
    primary: {
      main: "#0A4D68",
    },
    secondary: {
      main: "#088395",
    },
    mode: "light",
  },
  // typography:{
  //   fontFamily:
  // }
});
theme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
