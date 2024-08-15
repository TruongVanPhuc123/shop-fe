import { CardProduct } from "@/components/CardProduct";
import { Button } from "@/components/ui/button";
import { Stack, Typography } from "@mui/material";

import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

function Products({
  data,
  handleDetail,
  page,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <Stack width={"100%"} spacing={5}>
      <div className="grid xl:grid-cols-4 grid-cols-3 gap-10">
        {data.map((element, index) => (
          <CardProduct
            key={index}
            className="w-[auto] flex flex-col items-center gap-5 justify-between"
            src={`${element.image}`}
            nameCard={element.name}
            imgStyles={"w-[70%]"}
            description={`${element.brand} - ${element.category}`}
            button={true}
            handleDetail={() => handleDetail(element._id)}
          />
        ))}
      </div>
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button variant="ghost" onClick={handlePrevPage}>
          <MdOutlineNavigateBefore />
        </Button>
        <Typography>{page}</Typography>
        <Button variant="ghost" onClick={handleNextPage}>
          <MdOutlineNavigateNext />
        </Button>
      </Stack>
    </Stack>
  );
}

export default Products;
