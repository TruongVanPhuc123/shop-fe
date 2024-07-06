import { CardWithForm } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomeMoreProducts() {
  return (
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
            src={"../../public/body/DrawKit-onlineshopping-Illustration-14.png"}
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
  );
}

export default HomeMoreProducts;
