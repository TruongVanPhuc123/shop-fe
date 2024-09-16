import HomeShow from "./HomeShow";
import HomeUtilities from "./HomeUtilities";
import HomeMoreProducts from "./HomeMoreProducts";
import HomeInstructAccount from "./HomeInstructAccount";
import HomeBestProduct from "./HomeBestProduct";

function index() {
  return (
    <div className=" w-full relative lg:mt-28 mt-28">
      <HomeShow />
      <HomeUtilities />
      <HomeMoreProducts />
      <HomeInstructAccount />s
      <HomeBestProduct />
    </div>
  );
}

export default index;
