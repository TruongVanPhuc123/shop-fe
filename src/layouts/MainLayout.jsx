import MainFooter from "./MainFooter";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainHeader from "./main-header/MainHeader";

function MainLayout() {
  return (
    <Stack className=" min-h-screen ">
      <MainHeader />
      <Outlet />
      <Box className="grow"></Box>
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
