import { useEffect, useState } from "react";
import SelectClickTrue from "./logo-click/SelectClickTrue";
import SelectClickFalse from "./logo-click/SelectClickFalse";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "@/feautures/user/UserSlice";
import useAuth from "@/hooks/useAuth";

function MainHeader() {
  const [logoClick, setLogoClick] = useState(false);

  const dispatch = useDispatch();
  const { user, success } = useSelector((state) => state.user);

  const auth = useAuth();
  const authenticated = auth.isAuthenticated;

  const userName = user?.name;
  const avatarUrl = user?.avatarUrl;
  let id = user?._id;

  if (authenticated === false) {
    id = null;
  }

  const hanldeClick = () => {
    setLogoClick(!logoClick);
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, success]);

  const logo = (
    <img width="58px" height="58px" src="/favicon.ico" alt="hippopotamus" />
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
          id={id}
          avatarUrl={avatarUrl}
          authenticated={authenticated}
        />
      )}
    </div>
  );
}

export default MainHeader;
