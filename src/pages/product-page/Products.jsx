import { CardProduct } from "@/components/CardProduct";
import { Button } from "@/components/ui/button";
import { Box, Stack, Typography } from "@mui/material";

import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

function Products({
  data,
  handleDetail,
  page,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <Stack width={"100%"} spacing={5}>
      <div className="grid xl:grid-cols-4 grid-cols-3 gap-10">
        {data.map((element, index) => (
          <CardProduct
            key={index}
            className="w-[auto] flex flex-col items-center gap-5 justify-between text-center"
            src={`${element.image}`}
            nameCard={element.name}
            imgStyles={"w-[100%] rounded-xl"}
            description={`${element.brand} - ${element.category}`}
            price={`${element.productItems[0]?.price.toFixed(3) || 0} VNĐ`}
            button={true}
            handleDetail={() => handleDetail(element._id)}
          />
        ))}
      </div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Button variant="ghost" onClick={handlePrevPage}>
            <MdOutlineNavigateBefore />
          </Button>
          <Typography>{page}</Typography>
          <Button variant="ghost" onClick={handleNextPage}>
            <MdOutlineNavigateNext />
          </Button>
        </Stack>
        <Box>
          <Typography className="font-medium">
            totalPages: {totalPages}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Products;
