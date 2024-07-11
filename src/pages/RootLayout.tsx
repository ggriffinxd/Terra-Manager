import { Outlet, useLocation } from "react-router-dom";
import "../globals.css";

export default function RootLayout() {
  const location = useLocation();
  const currentPath = location.pathname;
  let routeName = "";
  if (currentPath === "/") {
    routeName = "Dashboard";
  } else {
    routeName = "Stock Items";
  }

  return (
    <>
      <h1 style={{ backgroundColor: "#000", color: "#fefefe", height: "12vh" }}>
        Olá Mundo
      </h1>
      <Outlet />
    </>
  );
}
