import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiMiniShoppingCart } from "react-icons/hi2";

export default function SelectClickFalse({
  hanldeClick,
  logo,
  userName,
  avatarUrl,
}) {
  return (
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
              <div className="flex items-center gap-1">
                <IconButton size="medium">
                  <Link to={"/cart"}>
                    <HiMiniShoppingCart />
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
