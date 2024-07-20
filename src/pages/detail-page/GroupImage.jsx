import { Box, Stack } from "@mui/material";

function GroupImage({ productDetail }) {
  return (
    <Stack className="w-1/2" alignItems={"center"}>
      <Box>
        <img src={`${productDetail?.image}`} alt="" />
      </Box>
    </Stack>
  );
}

export default GroupImage;
