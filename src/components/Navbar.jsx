import { SheetCard } from "./SheetCard";
import { SheetMenu } from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Typography from "./Typography";
import { Dialog } from "./Dialog";
import { Stack } from "@mui/material";
import { CiLogout } from "react-icons/ci";

function Navbar() {
  const auth = useAuth();
  const userName = auth?.user?.name;
  const roles = auth?.user?.roles;
  const { logout } = auth;

  const [logoClick, setLogoClick] = useState(false);

  const hanldeClick = () => {
    setLogoClick(!logoClick);
  };

  const logo = (
    <img
      width="48"
      height="48"
      src="../../public/nav/favicon.ico"
      alt="hippopotamus"
    />
  );

  return (
    <div
      className={` ${
        logoClick
          ? `bg-white border-b-2 border-slate-100 rounded-full sticky top-2 left-0 z-30 w-[10%] transition-all duration-1000 ease-in-out mx-[10%] hover:shadow-2xl`
          : `bg-white border-b-2 border-slate-100 rounded-full sticky top-2 z-30 m-auto md:w-[80%] transition-all duration-1000 ease-in-out hover:shadow-2xl`
      } md:block hidden`}
    >
      {logoClick ? (
        <div className="px-5 py-2 w-full flex justify-between">
          <button className="w-12 h-12 cursor-pointer" onClick={hanldeClick}>
            {logo}
          </button>
          <div className="flex items-center gap-5">
            <SheetCard />
            <SheetMenu />
          </div>
        </div>
      ) : (
        <div className="px-5 py-2">
          <div className="flex items-center gap:14 sm:gap-14 flex-1 min-w-fit flex-shrink">
            <button className="w-12 h-12 cursor-pointer" onClick={hanldeClick}>
              {logo}
            </button>
            <div className="md:flex items-center gap-12 hidden font-bold min-w-fit flex-shrink">
              <Link to={"/"}>
                <span className="text-lg hover:text-sky-500 delay-100 cursor-pointer ">
                  Home
                </span>
              </Link>
              <Link to={"/products"}>
                <span className="text-lg hover:text-sky-500 delay-100 cursor-pointer ">
                  Products
                </span>
              </Link>
              {roles === "admin" && (
                <Link to={"/dashboard"}>
                  <span className="text-lg hover:text-sky-500 delay-100 cursor-pointer ">
                    Dashboard
                  </span>
                </Link>
              )}
            </div>
            <div className="lg:flex md:flex flex lg:flex-1 gap-10 items-center justify-end font-bold">
              <div className="flex-10 sm:block hidden min-w-fit flex-shrink">
                {!userName ? (
                  <ul className="flex gap-10 text-lg items-center text-[18px]">
                    <Link to={"/login"}>
                      <li className="hover:text-sky-500 transition delay-100 cursor-pointer">
                        Sign in
                      </li>
                    </Link>
                    <div className="text-gray-100">|</div>
                    <Link to={"/register"}>
                      <li className="hover:text-sky-500  transition delay-100 cursor-pointer">
                        Create Account
                      </li>
                    </Link>
                    <div className="text-gray-100">|</div>
                  </ul>
                ) : (
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Typography>Welcome {userName} !</Typography>
                    <Dialog
                      trigger={<CiLogout className="text-2xl text-gray-500 " />}
                      variant={"ghost"}
                      title={"Do you want to logout?"}
                      description={
                        "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
                      }
                      action={logout}
                    />
                  </Stack>
                )}
              </div>
              <div className="flex items-center gap-5">
                <SheetCard />
                <SheetMenu />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
