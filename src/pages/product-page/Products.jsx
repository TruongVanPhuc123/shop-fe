import { CardWithForm } from "@/components/Card";

function Products({ data, handleDetail }) {
  return (
    <div className="grid md:grid-cols-4 grid-cols-3  gap-4">
      {data.map((element, index) => (
        <CardWithForm
          key={index}
          className="md:w-[360px] w-[100px]"
          src={"../../public/body/Brazuca - UI Design.png"}
          nameCard={element.name}
          imgStyles={"w-[50%]"}
          description={element.description}
          button={true}
          handleDetail={() => handleDetail(element._id)}
        />
      ))}
    </div>
  );
}

export default Products;
