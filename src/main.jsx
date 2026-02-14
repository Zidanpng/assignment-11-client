import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import Roots from "./layouts/Roots.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-left"></Toaster>
    <RouterProvider router={router} />
  </StrictMode>,
);
