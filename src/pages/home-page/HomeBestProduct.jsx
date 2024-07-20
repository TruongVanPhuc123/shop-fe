import { CardProduct } from "@/components/CardProduct";

function HomeBestProduct() {
  return (
    <section>
      <div className="w-full h-[1000px] md:p-20 p-10">
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="absolute top-0 md:left-40 left-0 z-10">
            <CardProduct
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
            <CardProduct
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
            <CardProduct
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
            <CardProduct
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
  );
}

export default HomeBestProduct;
