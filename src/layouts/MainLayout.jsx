import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <MainHeader />
      <Outlet />
      <div className="grow"></div>
      <MainFooter />
    </div>
  );
}

export default MainLayout;
