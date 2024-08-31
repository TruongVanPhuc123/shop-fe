import MainHeader from "@/layouts/main-header/MainHeader";
import { Box, Stack } from "@mui/material";
import Typography from "@/components/Typography";
import ProfileSelect from "./ProfileSelect";
import { Outlet } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="h-[100vh]">
      <MainHeader />
      <Box className="w-[80%] m-auto my-20">
        <Stack spacing={10}>
          <Stack width={"100%"} spacing={1}>
            <Typography className="font-bold text-2xl">My Account</Typography>
            <Typography className="text-pretty text-gray-400">
              Update your account settings. Set your preferred language and
              timezone.
            </Typography>
          </Stack>
          <div className="md:flex gap-10 w-full">
            <div className="md:w-[30%]">
              <ProfileSelect />
            </div>
            <div className="w-full mb-10">
              <Outlet />
            </div>
          </div>
        </Stack>
      </Box>
    </div>
  );
}
