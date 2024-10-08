import ImageBox from "@/components/ImageBox";
import Typography from "@/components/Typography";
import { Stack } from "@mui/material";

function HomeInstructAccount() {
  return (
    <section>
      <Stack gap={20} className="text-center bg-slate-50 w-full h-auto p-10">
        <Typography className="text-4xl font-bold">
          How To Create Account ?
        </Typography>
        <div className="flex lg:flex-row lg:justify-between flex-col items-center gap-10 text-center text-xl w-[100%]">
          <ImageBox
            divStyles={"lg:w-[30%] flex flex-col items-center"}
            imgStyles={"w-[50%]"}
            src={"/DrawKit-onlineshopping-Illustration-14.png"}
            alt={""}
          >
            <Typography className="text-2xl font-bold">One</Typography>
            <Typography className="text-pretty text-slate-500">
              Free worldwire shiping on all orders.Free worldwire shiping on all
              orders.Free worldwire shiping on all orders
            </Typography>
          </ImageBox>
          <ImageBox
            divStyles={"lg:w-[30%] flex flex-col items-center"}
            imgStyles={"w-[50%]"}
            src={"/DrawKit-onlineshopping-Illustration-14.png"}
            alt={""}
          >
            <p className="text-2xl font-bold">Two</p>
            <p className="text-pretty text-slate-500">
              Free worldwire shiping on all orders.Free worldwire shiping on all
              orders.Free worldwire shiping on all orders
            </p>
          </ImageBox>
          <ImageBox
            divStyles={"lg:w-[30%] flex flex-col items-center"}
            imgStyles={"w-[50%]"}
            src={"/DrawKit-onlineshopping-Illustration-14.png"}
            alt={""}
          >
            <p className="text-2xl font-bold">Three</p>
            <p className="text-pretty text-slate-500">
              Free worldwire shiping on all orders.Free worldwire shiping on all
              orders.Free worldwire shiping on all orders
            </p>
          </ImageBox>
        </div>
        <div className="grid grid-rows-1 grid-flow-row">
          <div className="flex justify-between gap-5">
            <ImageBox
              divStyles={
                "flex lg:flex-row flex-col items-center gap-3 lg:justify-around lg:border-r-4"
              }
              imgStyles={"lg:w-[20%] w-[50%]"}
              src={"/Protection.png"}
              alt={""}
            >
              <div className="lg:w-[50%] text-pretty flex flex-col gap-5">
                <p className="lg:text-2xl text-xs">
                  Compliant with all regulations
                </p>
                <p className="lg:text-xl text-xs text-slate-300">
                  Including GDPR
                </p>
              </div>
            </ImageBox>
            <ImageBox
              divStyles={
                "flex lg:flex-row flex-col items-center gap-3 lg:justify-around lg:border-r-4"
              }
              imgStyles={"lg:w-[20%] w-[50%]"}
              src={"/FAQ.png"}
              alt={""}
            >
              <div className="lg:w-[50%] text-pretty flex flex-col gap-5">
                <p className="lg:text-2xl text-xs">
                  No integrations with your HR systems
                </p>
                <p className="lg:text-xl text-xs text-slate-300">
                  From “go” to “live” in just a few days
                </p>
              </div>
            </ImageBox>
            <ImageBox
              divStyles={
                "flex lg:flex-row flex-col items-center gap-3 lg:justify-around"
              }
              imgStyles={"lg:w-[20%] w-[50%]"}
              src={"/Reviews.png"}
              alt={""}
            >
              <div className="lg:w-[50%] text-pretty flex flex-col gap-5">
                <p className="lg:text-2xl text-xs">Proven launch playbook</p>
                <p className="lg:text-xl text-xs text-slate-300">
                  Boosts engagement among your employees
                </p>
              </div>
            </ImageBox>
          </div>
        </div>
      </Stack>
    </section>
  );
}

export default HomeInstructAccount;
