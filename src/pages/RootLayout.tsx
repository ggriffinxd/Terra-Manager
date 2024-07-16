import { Outlet, useLocation } from "react-router-dom";
import "../globals.css";

export default function RootLayout() {
  return (
    <>
      <h1 style={{ backgroundColor: "#000", color: "#fefefe", height: "12vh" }}>
        Olá Mundo
      </h1>
      <Outlet />
    </>
  );
}
