import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import SelectClickTrue from "./logo-click/SelectClickTrue";
import SelectClickFalse from "./logo-click/SelectClickFalse";

function MainHeader() {
  const auth = useAuth();
  const [logoClick, setLogoClick] = useState(false);

  const userName = auth?.user?.name;
  const avatarUrl = auth?.user?.avatarUrl;
  // const { logout } = auth;

  const hanldeClick = () => {
    setLogoClick(!logoClick);
  };

  const logo = (
    <img
      width="58px"
      height="58px"
      // src="../../public/body/Allura - Couch.png"
      src="/favicon.ico"
      alt="hippopotamus"
    />
  );

  return (
    <div
      className={` ${
        logoClick
          ? `bg-white border-b-2 border-slate-100 rounded-full sticky top-2 left-0 z-30 w-[150px] transition-all duration-1000 ease-in-out mx-[10%] hover:shadow-2xl`
          : `bg-white border-b-2 border-slate-100 rounded-full sticky top-2 z-30 m-auto w-[80%] transition-all duration-1000 ease-in-out hover:shadow-2xl`
      }`}
    >
      {logoClick ? (
        <SelectClickTrue
          hanldeClick={hanldeClick}
          logo={logo}
          userName={userName}
          avatarUrl={avatarUrl}
        />
      ) : (
        <SelectClickFalse
          hanldeClick={hanldeClick}
          logo={logo}
          userName={userName}
          avatarUrl={avatarUrl}
        />
      )}
    </div>
  );
}

export default MainHeader;
