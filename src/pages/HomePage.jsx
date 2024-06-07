import { CardWithForm } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { FaGift } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function HomePage() {
  return (
    <div className=" w-full relative lg:mt-28">
      <section>
        <div className="absolute w-full z-20 ">
          <div className="flex flex-col gap-5 scroll-m-20 lg:text-4xl text-3xl lg:px-80 px-12 text-center text-pretty  font-extrabold tracking-tight">
            <p> The Joke Tax Chronicles</p>
            <p className="lg:text-xl text-lg font-normal">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="animate-bounce w-full h-10 drop-shadow-4xl">
            <img
              className="absolute h-32 -z-10 left-2 drop-shadow-2xl opacity-50 lg:hidden block"
              src="../../public/body/Allura - Couch.png"
              alt=""
            />
          </div>
          <div className="animate-bounce w-full h-10 drop-shadow-4xl">
            <img
              className="absolute h-32 -z-10 top-36 right-2 drop-shadow-2xl opacity-50 lg:hidden block"
              src="../../public/body/Brazuca - UI Design.png"
              alt=""
            />
          </div>
          <div className="animate-bounce w-full h-10 drop-shadow-4xl">
            <img
              className="absolute h-44 z-10 top-0 right-20 lg:block hidden"
              src="../../public/body/People of Brooklyn - Shoe.png"
              alt=""
            />
          </div>
          <div className="animate-bounce w-40 h-10 drop-shadow-4xl">
            <img
              className="absolute h-44 z-10 bottom-0 left-20 lg:block hidden"
              src="../../public/body/Family Values - Shopping.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto lg:mt-36 mt-52 bg-slate-50 p-10">
          <div className=" text-sky-400">
            <div className="grid lg:grid-rows-1 grid-rows-2  grid-flow-col gap-4">
              <div className="flex flex-col items-center text-5xl  gap-3">
                <FaShippingFast />
                <p className="text-black lg:text-2xl text-xl uppercase">
                  Free Ship
                </p>
                <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                  Free worldwire shiping on all orders
                </p>
              </div>
              <div className="flex flex-col items-center text-5xl gap-3">
                <FaBox />
                <p className="text-black lg:text-2xl text-xl  uppercase">
                  Free Ship
                </p>
                <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                  Free worldwire shiping on all orders
                </p>
              </div>
              <div className="flex flex-col items-center text-5xl gap-3">
                <FaGift />
                <p className="text-black lg:text-2xl text-xl  uppercase">
                  Free Ship
                </p>
                <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                  Free worldwire shiping on all orders
                </p>
              </div>
              <div className="flex flex-col items-center text-5xl gap-3">
                <FaMessage />
                <p className="text-black lg:text-2xl text-xl  uppercase">
                  Free Ship
                </p>
                <p className="text-gray-400 lg:text-xl text-[12px] w-36 text-pretty text-center">
                  Free worldwire shiping on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col items-center gap-10  p-10">
          <div className="grid grid-rows-2 2xl:grid-rows-1 grid-flow-col gap-4">
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
          </div>
          <Button variant="">More Products</Button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
