import { Toaster } from "@/components/ui/toaster";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

function MainLayout() {
  return (
    <Stack className=" min-h-screen ">
      <MainHeader />
      <Toaster />
      <Outlet />
      <Box className="grow"></Box>
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
