import { Link } from "react-router-dom";
import { Box, IconButton, Stack } from "@mui/material";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiMiniShoppingCart } from "react-icons/hi2";
import DropMenuAfterLogin from "@/components/DropMenuAfterLogin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@/components/Typography";
import { getCartItems } from "@/feautures/cart/CartSlice";
import DropMenuBeforeLogin from "@/components/DropMenuBeforeLogin";
import setSession from "@/utils/setSession";

export default function SelectClickFalse({
  hanldeClick,
  logo,
  userName,
  id,
  avatarUrl,
}) {
  const accessToken = window.localStorage.getItem("access_token");
  const { cartItems, success } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let count = cartItems?.count;

  useEffect(() => {
    if (accessToken) {
      setSession(accessToken);
      dispatch(getCartItems());
    }
  }, [success]);

  return (
    <Box className="px-5 py-2 w-full">
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Stack direction={"row"} alignItems={"center"} gap={5}>
          <button className="w-12 h-12 cursor-pointer" onClick={hanldeClick}>
            {logo}
          </button>
          <div className=" sm:flex hidden items-center gap-12 font-bold min-w-fit flex-shrink">
            <Link to={"/"}>
              <Typography className="text-lg hover:text-sky-500 delay-100 cursor-pointer ">
                Home
              </Typography>
            </Link>
            <Link to={"/products"}>
              <Typography className="text-lg hover:text-sky-500 delay-100 cursor-pointer ">
                Products
              </Typography>
            </Link>
          </div>
        </Stack>
        <div className="sm:hidden flex items-center font-bold ">TVP Shop</div>
        <div className="lg:flex md:flex flex lg:flex-1 gap-10 items-center justify-end font-bold w-[50%]">
          <Box>
            {!id ? (
              <Box>
                <ul className="md:flex hidden gap-10 text-lg items-center text-[18px]">
                  <Link to={"/login"}>
                    <Typography className="hover:text-sky-500 transition delay-100 cursor-pointer">
                      Sign in
                    </Typography>
                  </Link>
                  <Link to={"/register"}>
                    <Typography className="hover:text-sky-500 transition delay-100 cursor-pointer">
                      Create Account
                    </Typography>
                  </Link>
                </ul>
                <div className="md:hidden flex">
                  <DropMenuBeforeLogin />
                </div>
              </Box>
            ) : (
              <Stack direction={"row"} alignItems={"center"}>
                <div className=" items-center sm:flex hidden">
                  {" "}
                  <IconButton size="medium">
                    <Link to={"/cart"}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <Box>
                          <HiMiniShoppingCart />
                        </Box>
                        <Typography className={"text-xl"}>
                          {" "}
                          ({count})
                        </Typography>
                      </Stack>
                    </Link>
                  </IconButton>
                  <IconButton size="small">
                    <Link to={`/profile`}>
                      {" "}
                      <Avatar>
                        <AvatarImage src={`${avatarUrl}`} />
                        <AvatarFallback>{userName.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                    </Link>
                  </IconButton>
                </div>
                <div className="sm:hidden flex items-center">
                  {" "}
                  <DropMenuAfterLogin />
                </div>
              </Stack>
            )}
          </Box>
        </div>
      </Stack>
    </Box>
  );
}
