import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/globalstyles";
import LandingPage from "./routes/landing-page/landing-page.components";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <LandingPage />,
//     },
//   ],
//   { basename: process.env.PUBLIC_URL }
// );
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
    <GlobalStyles />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
