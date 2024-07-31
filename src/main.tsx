import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RegisterPlanting from "./pages/RegisterPlanting/RegisterPlanting";
import RegisterCultivation from "./pages/RegisterCultivation/RegisterCultivation";
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
        path: "RegisterPlanting",
        element: <RegisterPlanting />,
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
