import { Stack } from "@mui/material";

function GroupImage({ productDetail }) {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <img width={"xl:w-[70%]"} src={`${productDetail?.image}`} alt="" />
    </Stack>
  );
}

export default GroupImage;
