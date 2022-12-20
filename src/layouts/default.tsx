import { Outlet } from "react-router-dom";
//components
import Header from "../components/Layouts/Header";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DefaultLayout;
