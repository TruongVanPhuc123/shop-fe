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
    <div className="flex-col w-full">
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={3}
        className="p-5 w-full"
      >
        <Avatar>
          <AvatarImage src={`${avatarUrl}`} />
          <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="md:flex-col flex items-center gap-3">
          <Typography> {name}</Typography>
          <Typography className={"text-sm"}>Account / Log out</Typography>
        </div>
      </Stack>
      <div className="flex md:flex-col items-center justify-between md:items-start w-full">
        <Link to={"/profile"} className=" w-full">
          <Box className="p-5 hover:bg-slate-200 cursor-pointer">
            <div className="md:flex items-center gap-3">
              <ImProfile />
              <Typography>Profile</Typography>
            </div>
          </Box>
        </Link>
        {roles === "admin" && (
          <>
            <Link to={"/profile/dash-board"} className=" w-full">
              <Box className="p-5 hover:bg-slate-200 cursor-pointer">
                <div className="md:flex items-center gap-3 w-full">
                  <MdDashboard />
                  <Typography>Dash board</Typography>
                </div>
              </Box>
            </Link>
          </>
        )}
        <Link to={"/profile/order-profile"} className=" w-full">
          <Box className="p-5 hover:bg-slate-200 cursor-pointer">
            <div className="md:flex items-center gap-3 w-full">
              <FaCartArrowDown />
              <Typography>Order</Typography>
            </div>
          </Box>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full p-5 hover:bg-slate-200 cursor-pointer"
        >
          <div className="md:flex items-center gap-3">
            <CiLogout />
            <Typography>Log out</Typography>
          </div>
        </button>
      </div>
    </div>
  );
}
