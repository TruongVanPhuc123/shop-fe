import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, Stack } from "@mui/material";
import { SelectStatusOrderProfile } from "@/components/select/SelectStatusOrderProfile";
import { Button } from "@/components/ui/button";

import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { deleteOrder, getOrders } from "@/feautures/order/OrderSlice";

export default function OrderDashBoard() {
  const { orders, success } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const dataOrders = orders?.orders;
  const totalPages = orders?.totalPages;

  const [btnDeleteOrder, setBtnDeleteOrder] = useState(false);
  const [statusOrder, setStatusOrder] = useState("All");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleDeleteOrder = (data) => {
    setBtnDeleteOrder(true);
    dispatch(
      deleteOrder({
        orderId: data.orderId,
        setBtnDeleteOrder,
      })
    );
  };

  useEffect(() => {
    dispatch(getOrders({ page, limit, statusOrder }));
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
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataOrders?.length ? (
          dataOrders?.map((order, index) => (
            <TableRow key={index}>
              <TableCell>
                <img width={"50px"} src={order.userId.avatarUrl} alt="null" />
              </TableCell>
              <TableCell>{order.userId.name}</TableCell>
              <TableCell>{order.userId.email}</TableCell>
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

              <TableCell>
                {order.status && (
                  <IconButton
                    onClick={() =>
                      handleDeleteOrder({
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
