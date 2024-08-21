import { CardProduct } from "@/components/CardProduct";
import Typography from "@/components/Typography";
import { Box, Stack } from "@mui/material";

function HomeBestProduct() {
  return (
    <section>
      <Box className="w-full h-[1000px] md:p-20 p-10">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          className="relative w-full h-full"
        >
          <Box className="absolute top-0 lg:left-40 left-0 z-10">
            <CardProduct
              className="md:w-[350px] w-[150px] flex flex-col items-center gap-3"
              src={"/DrawKit-onlineshopping-Illustration-14.png"}
              nameCard={"Short"}
              imgStyles={"w-[50%]"}
              description={
                "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
              }
            />
          </Box>
          <Box className="absolute top-10 right-0 z-10">
            <CardProduct
              className="md:w-[350px] w-[150px] flex flex-col items-center gap-3"
              src={"/DrawKit-onlineshopping-Illustration-14.png"}
              nameCard={"Short"}
              imgStyles={"w-[50%]"}
              description={
                "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
              }
            />
          </Box>
          <Box className="absolute top-[500px] left-0 z-10">
            <CardProduct
              className="md:w-[350px] w-[150px] flex flex-col items-center gap-3"
              src={"/DrawKit-onlineshopping-Illustration-14.png"}
              nameCard={"Short"}
              imgStyles={"w-[50%]"}
              description={
                "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
              }
            />
          </Box>
          <Box className="absolute lg:top-[500px] lg:right-40 top-[400px] right-0 z-10">
            <CardProduct
              className="md:w-[350px] w-[150px] flex flex-col items-center gap-3"
              src={"/DrawKit-onlineshopping-Illustration-14.png"}
              nameCard={"Short"}
              imgStyles={"w-[50%]"}
              description={
                "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
              }
            />
          </Box>
          <Typography className="lg:text-5xl text-2xl relative z-20 md:w-[40%] text-center">
            On-demand access to your financial coach
          </Typography>
        </Stack>
      </Box>
    </section>
  );
}

export default HomeBestProduct;
