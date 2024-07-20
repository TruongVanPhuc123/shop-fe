import Typography from "@/components/Typography";
import { Box, Divider, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/hooks/useAuth";

import { CiLogout } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "@/feautures/user/UserSlice";
import { useEffect } from "react";

export default function ProfileSelect() {
  const auth = useAuth();
  const { logout } = auth;

  const navigate = useNavigate();

  const { user, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const avatarUrl = user?.avatarUrl;
  const name = user?.name;
  const roles = user?.roles;

  const handleLogout = () => {
    logout(() => {
      navigate("/");
    });
    Swal.fire({
      title: "Logout success",
      text: "See you later!",
      icon: "success",
    });
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, success]);

  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={3}
        className="p-5"
      >
        <Avatar>
          <AvatarImage src={`${avatarUrl}`} />
          <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <Stack>
          <Typography> {name}</Typography>
          <Typography className={"text-sm"}>Account / Log out</Typography>
        </Stack>
      </Stack>
      <Link to={"/profile"}>
        <Box className="p-5 hover:bg-slate-200 cursor-pointer">
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            width={"100%"}
          >
            <ImProfile />
            <Typography>Profile</Typography>
          </Stack>
        </Box>
      </Link>
      <Divider />
      {roles === "admin" && (
        <>
          <Link to={"/profile/dash-board"}>
            <Box className="p-5 hover:bg-slate-200 cursor-pointer">
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={2}
                width={"100%"}
              >
                <MdDashboard />
                <Typography>Dash board</Typography>
              </Stack>
            </Box>
          </Link>
          <Divider />
        </>
      )}
      <Link to={"/profile/order"}>
        <Box className="p-5 hover:bg-slate-200 cursor-pointer">
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            width={"100%"}
          >
            <FaCartArrowDown />
            <Typography>Order</Typography>
          </Stack>
        </Box>
      </Link>
      <Divider />
      <button
        onClick={handleLogout}
        className="w-full p-5 hover:bg-slate-200 cursor-pointer"
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <CiLogout />
          <Typography>Log out</Typography>
        </Stack>
      </button>
      <Divider />
    </div>
  );
}
