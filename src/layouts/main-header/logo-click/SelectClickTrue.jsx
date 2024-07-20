import { IconButton } from "@mui/material";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function SelectClickTrue({ hanldeClick, logo }) {
  return (
    <div className="px-5 py-2 w-full flex justify-between">
      <button className="w-12 h-12 cursor-pointer" onClick={hanldeClick}>
        {logo}
      </button>
      <IconButton size="medium">
        <Link to={"/cart"}>
          <HiMiniShoppingCart />
        </Link>
      </IconButton>
    </div>
  );
}
