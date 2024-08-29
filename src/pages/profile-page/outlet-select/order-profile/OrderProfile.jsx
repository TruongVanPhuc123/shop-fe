import Typography from "@/components/Typography";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  deleteOrder,
  deleteOrderItem,
  getOrdersByCurrentUserId,
} from "@/feautures/order/OrderSlice";
import { Box, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectStatusOrderProfile } from "@/components/select/SelectStatusOrderProfile";

import { IoMdClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { DialogOrder } from "@/components/DialogOrder";

export default function OrderProfile() {
  const { ordersByCurrentUserId, success } = useSelector(
    (state) => state.order
  );
  const dispatch = useDispatch();

  const dataOrders = ordersByCurrentUserId?.orders;
  const totalPages = ordersByCurrentUserId?.totalPages;

  // const [handlePage, setHandlePage] = useState(false);
  const [btnDeleteOrder, setBtnDeleteOrder] = useState(false);
  const [statusOrder, setStatusOrder] = useState("All");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  const handlePrevPage = () => {
    setTimeout(() => {
      if (page > 1) {
        setPage(page - 1);
      }
    }, 1000);
  };

  const handleNextPage = () => {
    setTimeout(() => {
      if (page < totalPages) {
        setPage(page + 1);
      }
    }, 1000);
  };

  const handleDeleteOrder = (data) => {
    setBtnDeleteOrder(true);
    if (data.type === "order") {
      dispatch(
        deleteOrder({
          orderId: data.orderId,
          setBtnDeleteOrder,
        })
      );
    } else {
      dispatch(
        deleteOrderItem({
          orderItemId: data.orderItemId,
          setBtnDeleteOrder,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getOrdersByCurrentUserId({ page, limit, statusOrder }));
  }, [dispatch, success, page, limit, statusOrder]);

  return (
    <Table>
      <TableCaption>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="w-full p-2"
        >
          <Box>
            <SelectStatusOrderProfile
              name={"Status"}
              setStatusOrder={setStatusOrder}
            />
          </Box>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button variant="ghost" onClick={handlePrevPage}>
              <MdOutlineNavigateBefore />
            </Button>
            <Typography>{page}</Typography>
            <Button variant="ghost" onClick={handleNextPage}>
              <MdOutlineNavigateNext />
            </Button>
          </Stack>
          <Box className="font-medium">
            <Typography>totalPages: {totalPages}</Typography>
          </Box>
        </Stack>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">Number</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Variants</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataOrders?.length ? (
          dataOrders?.map((order, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography>{index + 1}</Typography>
              </TableCell>
              <TableCell>
                <img
                  width={"50px"}
                  src={order.orderItems[0].productItemId.productId.image}
                  alt=""
                />
              </TableCell>
              <TableCell>
                {order.orderItems[0].productItemId.productId.name}
              </TableCell>
              <TableCell>
                <Typography
                  className={
                    order.status.includes("accepted")
                      ? "text-lime-500"
                      : "text-rose-500"
                  }
                >
                  {order.status}
                </Typography>
              </TableCell>
              <TableCell>{order.orderItems[0].quantity}</TableCell>
              <TableCell>
                <Typography>
                  Size: {order.orderItems[0].productItemId.size}
                </Typography>
                <Typography>
                  Color: {order.orderItems[0].productItemId.color}
                </Typography>
              </TableCell>
              <TableCell>{order.orderItems[0].productItemId.price}</TableCell>
              <TableCell>
                {order.status.includes("accepted") ? (
                  <></>
                ) : (
                  <>
                    {order.orderItems.length > 1 ? (
                      <DialogOrder
                        title={"Total Orders"}
                        description={"You can delete order at here !"}
                        data={order}
                        handleDeleteOrder={handleDeleteOrder}
                        btnDeleteOrder={btnDeleteOrder}
                      />
                    ) : (
                      <IconButton
                        onClick={() =>
                          handleDeleteOrder({
                            type: "order",
                            orderId: order._id,
                          })
                        }
                      >
                        {!btnDeleteOrder ? (
                          <Typography>
                            <IoMdClose />
                          </Typography>
                        ) : (
                          <Typography className={"animate-spin"}>
                            <AiOutlineLoading3Quarters />
                          </Typography>
                        )}
                      </IconButton>
                    )}
                  </>
                )}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>
              <Typography>Not Found</Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
