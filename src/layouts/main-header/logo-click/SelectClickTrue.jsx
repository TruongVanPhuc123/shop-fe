import DropMenu from "@/components/DropMenuAfterLogin";
import { IconButton } from "@mui/material";

export default function SelectClickTrue({
  hanldeClick,
  logo,
  userName,
  avatarUrl,
}) {
  return (
    <div className="px-5 py-2 w-full flex justify-between">
      <button className="w-12 h-12 cursor-pointer" onClick={hanldeClick}>
        {logo}
      </button>
      <IconButton size="medium">
        <DropMenu userName={userName} avatarUrl={avatarUrl} />
      </IconButton>
    </div>
  );
}
