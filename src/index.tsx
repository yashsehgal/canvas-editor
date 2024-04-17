import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from "@mantine/core";

const colorPalette: MantineColorsTuple = [
  "#f3f3fe",
  "#e4e6ed",
  "#c8cad3",
  "#a9adb9",
  "#9093a4",
  "#808496",
  "#767c91",
  "#656a7e",
  "#585e72",
  "#4a5167",
];

const theme = createTheme({
  colors: {
    colorPalette,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
