import ImageBox from "@/components/ImageBox";
import Typography from "@/components/Typography";
import { Box, Stack } from "@mui/material";

function HomeShow() {
  return (
    <section>
      <Box className="absolute w-full z-20">
        <Stack gap={5} className="lg:px-80 px-12 text-center tracking-tight">
          <Typography className="lg:text-4xl text-3xl text-black text-pretty font-extrabold">
            The Joke Tax Chronicles
          </Typography>
          <Typography className="font-normal lg:text-xl text-gray-400 text-[12px] text-pretty">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </Typography>
        </Stack>
      </Box>
      <Box className="relative h-full w-full">
        <ImageBox
          divStyles={"animate-bounce w-full h-10 drop-shadow-4xl"}
          imgStyles={
            "absolute h-32 -z-10 left-2 drop-shadow-2xl opacity-50 lg:hidden block"
          }
          src={"/Allura - Couch.png"}
          alt={""}
        />
        <ImageBox
          divStyles={"animate-bounce w-full h-10 drop-shadow-4xl"}
          imgStyles={
            "absolute h-32 -z-10 top-36 right-2 drop-shadow-2xl opacity-50 lg:hidden block"
          }
          src={"/Brazuca - UI Design.png"}
          alt={""}
        />
        <ImageBox
          divStyles={"animate-bounce w-full h-10 drop-shadow-4xl"}
          imgStyles={"absolute h-44 z-10 top-0 right-20 lg:block hidden"}
          src={"/People of Brooklyn - Shoe.png"}
          alt={""}
        />
        <ImageBox
          divStyles={"animate-bounce w-40 h-10 drop-shadow-4xl"}
          imgStyles={"absolute h-44 z-10 bottom-0 left-20 lg:block hidden"}
          src={"/Family Values - Shopping.png"}
          alt={""}
        />
      </Box>
    </section>
  );
}

export default HomeShow;
