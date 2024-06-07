import { SheetCard } from "./SheetCard";
import { SheetMenu } from "./Menu";

function Navbar() {
  const logo = (
    <img
      width="48"
      height="48"
      src="../../public/nav/favicon.ico"
      alt="hippopotamus"
    />
  );

  return (
    <nav>
      <div className="h-10vh flex lg:py-3 px-5  py-2 z-50 text-gray-500 font-bold lg:text-black lg:flex-1">
        <div className="flex items-center gap:14 sm:gap-14 flex-1">
          <span className=" font-bold w-12 h-12 ">{logo}</span>

          <div className="md:flex items-center gap-12 hidden">
            <span className="text-lg hover:text-sky-500 cursor-pointer ">
              Icon
            </span>
            <span className="text-lg hover:text-sky-500 cursor-pointer ">
              UI Kits
            </span>
          </div>
        </div>
        <div className="lg:flex md:flex flex lg:flex-1 gap-10 items-center justify-end font-bold">
          <div className="flex-10 sm:block hidden">
            <ul className="flex gap-10 text-lg items-center text-[18px]">
              <li className="hover:text-sky-500 transition cursor-pointer">
                Sign in
              </li>
              <div className="text-gray-100">|</div>
              <li className="hover:text-sky-500 transition cursor-pointer">
                Create Account
              </li>
              <div className="text-gray-100">|</div>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <SheetCard />
            <SheetMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
