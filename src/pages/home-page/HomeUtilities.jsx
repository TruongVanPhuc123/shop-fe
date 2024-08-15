import ImageBox from "@/components/ImageBox";

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
              <p className="text-black lg:text-2xl text-xl uppercase">
                Free Ship
              </p>
              <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                Free worldwire shiping on all orders
              </p>
            </ImageBox>
            <ImageBox
              divStyles={"flex flex-col items-center text-5xl gap-3"}
              imgStyles={"w-[20%]"}
              src={"/Wishlist.png"}
              alt={""}
            >
              <p className="text-black lg:text-2xl text-xl  uppercase">
                Pretty Box
              </p>
              <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                Free worldwire shiping on all orders
              </p>
            </ImageBox>
            <ImageBox
              divStyles={"flex flex-col items-center text-5xl gap-3"}
              imgStyles={"w-[20%]"}
              src={"/Card.png"}
              alt={""}
            >
              <p className="text-black lg:text-2xl text-xl  uppercase">
                Auto Card
              </p>
              <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                Free worldwire shiping on all orders
              </p>
            </ImageBox>
            <ImageBox
              divStyles={"flex flex-col items-center text-5xl gap-3"}
              imgStyles={"w-[20%]"}
              src={"/Bill.png"}
              alt={""}
            >
              <p className="text-black lg:text-2xl text-xl  uppercase">
                Fresh Bill
              </p>
              <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                Free worldwire shiping on all orders
              </p>
            </ImageBox>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeUtilities;
