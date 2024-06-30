import { CardWithForm } from "@/components/Card";
import ImageBox from "@/components/ImageBox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" w-full relative lg:mt-28 mt-28">
      <section>
        <div className="absolute w-full z-20 ">
          <div className="flex flex-col gap-5 lg:px-80 px-12 text-center tracking-tight">
            <p className="lg:text-4xl text-3xl text-black text-pretty font-extrabold">
              The Joke Tax Chronicles
            </p>
            <p className="font-normal lg:text-xl text-gray-400 text-[12px] text-pretty">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
          </div>
        </div>
        <div className="relative h-full w-full">
          <ImageBox
            divStyles={"animate-bounce w-full h-10 drop-shadow-4xl"}
            imgStyles={
              "absolute h-32 -z-10 left-2 drop-shadow-2xl opacity-50 lg:hidden block"
            }
            src={"../../public/body/Allura - Couch.png"}
            alt={""}
          />
          <ImageBox
            divStyles={"animate-bounce w-full h-10 drop-shadow-4xl"}
            imgStyles={
              "absolute h-32 -z-10 top-36 right-2 drop-shadow-2xl opacity-50 lg:hidden block"
            }
            src={"../../public/body/Brazuca - UI Design.png"}
            alt={""}
          />
          <ImageBox
            divStyles={"animate-bounce w-full h-10 drop-shadow-4xl"}
            imgStyles={"absolute h-44 z-10 top-0 right-20 lg:block hidden"}
            src={"../../public/body/People of Brooklyn - Shoe.png"}
            alt={""}
          />
          <ImageBox
            divStyles={"animate-bounce w-40 h-10 drop-shadow-4xl"}
            imgStyles={"absolute h-44 z-10 bottom-0 left-20 lg:block hidden"}
            src={"../../public/body/Family Values - Shopping.png"}
            alt={""}
          />
        </div>
      </section>
      <section>
        <div className="w-full h-auto lg:mt-36 mt-52 bg-slate-50 p-10">
          <div className=" text-sky-400">
            <div className="grid lg:grid-rows-1 grid-rows-2  grid-flow-col gap-4">
              <ImageBox
                divStyles={"flex flex-col items-center text-5xl  gap-3"}
                imgStyles={"w-[20%]"}
                src={"../../public/body/Delivery.png"}
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
                src={"../../public/body/Wishlist.png"}
                alt={""}
              >
                <p className="text-black lg:text-2xl text-xl  uppercase">
                  Free Ship
                </p>
                <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                  Free worldwire shiping on all orders
                </p>
              </ImageBox>
              <ImageBox
                divStyles={"flex flex-col items-center text-5xl gap-3"}
                imgStyles={"w-[20%]"}
                src={"../../public/body/Card.png"}
                alt={""}
              >
                <p className="text-black lg:text-2xl text-xl  uppercase">
                  Free Ship
                </p>
                <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                  Free worldwire shiping on all orders
                </p>
              </ImageBox>
              <ImageBox
                divStyles={"flex flex-col items-center text-5xl gap-3"}
                imgStyles={"w-[20%]"}
                src={"../../public/body/Bill.png"}
                alt={""}
              >
                <p className="text-black lg:text-2xl text-xl  uppercase">
                  Free Ship
                </p>
                <p className="text-gray-400 lg:text-xl  text-[12px] w-36 text-pretty text-center">
                  Free worldwire shiping on all orders
                </p>
              </ImageBox>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col items-center gap-10  p-10">
          <div className="grid grid-rows-2 2xl:grid-rows-1 grid-flow-col gap-4">
            <CardWithForm
              src={"../../public/body/Shiny Happy - Plants 3.png"}
              nameCard={"Clothes"}
              imgStyles={"w-[50%]"}
              description={
                "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
              }
            />
            <CardWithForm
              src={
                "../../public/body/DrawKit-onlineshopping-Illustration-14.png"
              }
              nameCard={"T-Shirt"}
              imgStyles={"w-[50%]"}
              description={
                "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
              }
            />
            <CardWithForm
              src={"../../public/body/Hyperspace - Outer Space.png"}
              nameCard={"Hoodie"}
              imgStyles={"w-[50%]"}
              description={
                "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
              }
            />
            <CardWithForm
              src={"../../public/body/Family Values - Shopping.png"}
              nameCard={"Short"}
              imgStyles={"w-[50%]"}
              description={
                "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
              }
            />
          </div>
          <Button variant="">
            <Link to={"/products"}>More Products</Link>
          </Button>
        </div>
      </section>
      <section>
        <div className=" flex flex-col gap-20 text-center bg-slate-50 w-full h-auto p-10">
          <p className="text-4xl font-bold">How To Create Account ?</p>
          <div className="flex lg:flex-row lg:justify-between flex-col items-center gap-10 text-center text-xl w-[100%]">
            <ImageBox
              divStyles={"lg:w-[30%] flex flex-col items-center"}
              imgStyles={"w-[50%]"}
              src={
                "../../public/body/DrawKit-onlineshopping-Illustration-14.png"
              }
              alt={""}
            >
              <p className="text-2xl font-bold">One</p>
              <p className="text-pretty text-slate-500">
                Free worldwire shiping on all orders.Free worldwire shiping on
                all orders.Free worldwire shiping on all orders
              </p>
            </ImageBox>
            <ImageBox
              divStyles={"lg:w-[30%] flex flex-col items-center"}
              imgStyles={"w-[50%]"}
              src={
                "../../public/body/DrawKit-onlineshopping-Illustration-14.png"
              }
              alt={""}
            >
              <p className="text-2xl font-bold">One</p>
              <p className="text-pretty text-slate-500">
                Free worldwire shiping on all orders.Free worldwire shiping on
                all orders.Free worldwire shiping on all orders
              </p>
            </ImageBox>
            <ImageBox
              divStyles={"lg:w-[30%] flex flex-col items-center"}
              imgStyles={"w-[50%]"}
              src={
                "../../public/body/DrawKit-onlineshopping-Illustration-14.png"
              }
              alt={""}
            >
              <p className="text-2xl font-bold">One</p>
              <p className="text-pretty text-slate-500">
                Free worldwire shiping on all orders.Free worldwire shiping on
                all orders.Free worldwire shiping on all orders
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
      <section>
        <div className="w-full h-[1000px] md:p-20 p-10">
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute top-0 md:left-40 left-0 z-10">
              <CardWithForm
                className="md:w-[350px] w-[150px]"
                src={
                  "../../public/body/DrawKit-onlineshopping-Illustration-14.png"
                }
                nameCard={"Short"}
                imgStyles={"w-[50%]"}
                description={
                  "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
                }
              />
            </div>
            <div className="absolute top-10 right-0 z-10">
              <CardWithForm
                className="md:w-[350px] w-[150px]"
                src={
                  "../../public/body/DrawKit-onlineshopping-Illustration-14.png"
                }
                nameCard={"Short"}
                imgStyles={"w-[50%]"}
                description={
                  "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
                }
              />
            </div>
            <div className="absolute top-[500px] left-0 z-10">
              <CardWithForm
                className="md:w-[350px] w-[150px]"
                src={
                  "../../public/body/DrawKit-onlineshopping-Illustration-14.png"
                }
                nameCard={"Short"}
                imgStyles={"w-[50%]"}
                description={
                  "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
                }
              />
            </div>
            <div className="absolute md:top-[500px] md:right-40 top-[400px] right-0 z-10">
              <CardWithForm
                className="md:w-[350px] w-[150px]"
                src={
                  "../../public/body/DrawKit-onlineshopping-Illustration-14.png"
                }
                nameCard={"Short"}
                imgStyles={"w-[50%]"}
                description={
                  "At One Theory, our mission is to help you live purposefully,peacefully, and unapologetically one day at a time"
                }
              />
            </div>
            <p className="text-5xl relative z-20 md:w-[40%] text-center">
              On-demand access to your financial coach
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
