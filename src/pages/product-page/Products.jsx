import { CardProduct } from "@/components/CardProduct";

function Products({ data, handleDetail }) {
  console.log(data);
  return (
    <div className="grid md:grid-cols-4 grid-cols-3  gap-4">
      {data.map((element, index) => (
        <CardProduct
          key={index}
          className="md:w-[360px] w-[100px] flex flex-col items-center gap-5 justify-between"
          src={`${element.image}`}
          nameCard={element.name}
          imgStyles={"w-[70%]"}
          description={element.category}
          button={true}
          handleDetail={() => handleDetail(element._id)}
        />
      ))}
    </div>
  );
}

export default Products;
