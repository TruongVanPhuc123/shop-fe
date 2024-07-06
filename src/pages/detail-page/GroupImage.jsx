import { Box, Stack } from "@mui/material";

function GroupImage() {
  return (
    <Stack spacing={3} alignItems={"center"} justifyContent={"center"}>
      <Box>
        <img src="../../public/body/Bill.png" alt="" />
      </Box>
      {/* show image with Array methods map */}
      <Stack direction={"row"} spacing={2}>
        <img
          className="xl:w-[20%] size-32"
          src="../../public/body/Bill.png"
          alt=""
        />
        <img
          className="xl:w-[20%] size-32"
          src="../../public/body/Bill.png"
          alt=""
        />
        <img
          className="xl:w-[20%] size-32"
          src="../../public/body/Bill.png"
          alt=""
        />
        <img
          className="xl:w-[20%] size-32"
          src="../../public/body/Bill.png"
          alt=""
        />
      </Stack>
    </Stack>
  );
}

export default GroupImage;
