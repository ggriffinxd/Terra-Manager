import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import FormRegister from "./pages/Form/FormRegister";
import RegisterCultivation from "./pages/RegisterCultivation/RegisterCultivation"
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "formRegister",
        element: <FormRegister />,
      },
      {
        path: "registerCultivation",
        element: <RegisterCultivation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
