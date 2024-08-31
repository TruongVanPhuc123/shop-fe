import ImageBox from "@/components/ImageBox";
import Typography from "@/components/Typography";

function HomeUtilities() {
  return (
    <section>
      <div className="w-full h-auto lg:mt-36 mt-52 bg-slate-50 p-10">
        <div className=" text-sky-400">
          <div className="grid lg:grid-rows-1 grid-rows-2  grid-flow-col gap-4">
            <ImageBox
              divStyles={"flex flex-col items-center text-5xl  gap-3"}
              imgStyles={"w-[20%]"}
              src={"/Delivery.png"}
              alt={""}
            >
              <Typography className="text-black lg:text-2xl text-xl uppercase">
                Free Ship
              </Typography>
              <Typography className="text-gray-400 lg:text-xl text-[12px] w-36 text-pretty text-center">
                Free worldwire shiping on all orders
              </Typography>
            </ImageBox>
            <ImageBox
              divStyles={"flex flex-col items-center text-5xl gap-3"}
              imgStyles={"w-[20%]"}
              src={"/Wishlist.png"}
              alt={""}
            >
              <Typography className="text-black lg:text-2xl text-xl uppercase">
                Pretty Box
              </Typography>
              <Typography className="text-gray-400 lg:text-xl text-[12px] w-36 text-pretty text-center">
                Free worldwire shiping on all orders
              </Typography>
            </ImageBox>
            <ImageBox
              divStyles={"flex flex-col items-center text-5xl gap-3"}
              imgStyles={"w-[20%]"}
              src={"/Card.png"}
              alt={""}
            >
              <Typography className="text-black lg:text-2xl text-xl uppercase">
                Auto Card
              </Typography>
              <Typography className="text-gray-400 lg:text-xl text-[12px] w-36 text-pretty text-center">
                Free worldwire shiping on all orders
              </Typography>
            </ImageBox>
            <ImageBox
              divStyles={"flex flex-col items-center text-5xl gap-3"}
              imgStyles={"w-[20%]"}
              src={"/Bill.png"}
              alt={""}
            >
              <Typography className="text-black lg:text-2xl text-xl uppercase">
                Fresh Bill
              </Typography>
              <Typography className="text-gray-400 lg:text-xl text-[12px] w-36 text-pretty text-center">
                Free worldwire shiping on all orders
              </Typography>
            </ImageBox>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeUtilities;
