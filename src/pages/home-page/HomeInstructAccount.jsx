import ImageBox from "@/components/ImageBox";

function HomeInstructAccount() {
  return (
    <section>
      <div className=" flex flex-col gap-20 text-center bg-slate-50 w-full h-auto p-10">
        <p className="text-4xl font-bold">How To Create Account ?</p>
        <div className="flex lg:flex-row lg:justify-between flex-col items-center gap-10 text-center text-xl w-[100%]">
          <ImageBox
            divStyles={"lg:w-[30%] flex flex-col items-center"}
            imgStyles={"w-[50%]"}
            src={"../../public/body/DrawKit-onlineshopping-Illustration-14.png"}
            alt={""}
          >
            <p className="text-2xl font-bold">One</p>
            <p className="text-pretty text-slate-500">
              Free worldwire shiping on all orders.Free worldwire shiping on all
              orders.Free worldwire shiping on all orders
            </p>
          </ImageBox>
          <ImageBox
            divStyles={"lg:w-[30%] flex flex-col items-center"}
            imgStyles={"w-[50%]"}
            src={"../../public/body/DrawKit-onlineshopping-Illustration-14.png"}
            alt={""}
          >
            <p className="text-2xl font-bold">One</p>
            <p className="text-pretty text-slate-500">
              Free worldwire shiping on all orders.Free worldwire shiping on all
              orders.Free worldwire shiping on all orders
            </p>
          </ImageBox>
          <ImageBox
            divStyles={"lg:w-[30%] flex flex-col items-center"}
            imgStyles={"w-[50%]"}
            src={"../../public/body/DrawKit-onlineshopping-Illustration-14.png"}
            alt={""}
          >
            <p className="text-2xl font-bold">One</p>
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
              src={"../../public/body/Protection.png"}
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
              src={"../../public/body/FAQ.png"}
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
              src={"../../public/body/Reviews.png"}
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
      </div>
    </section>
  );
}

export default HomeInstructAccount;
