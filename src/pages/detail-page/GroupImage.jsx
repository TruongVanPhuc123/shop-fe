import { Stack } from "@mui/material";

function GroupImage({ productDetail }) {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <img
        className="rounded-lg p-5"
        width={"xl:w-[70%]"}
        src={`${productDetail?.image}`}
        alt=""
      />
    </Stack>
  );
}

export default GroupImage;
