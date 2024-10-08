import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Box } from "@mui/material";
import Typography from "./Typography";
import { Link } from "react-router-dom";

import { IoMdMenu } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";

export default function DropMenuBeforeLogin() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-2xl">
        <IoMdMenu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>What your find?</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to={"/login"}>
          {" "}
          <DropdownMenuItem className="cursor-pointer">
            <Box className="mr-2">
              <MdAccountCircle />
            </Box>
            <Typography className={"font-medium"}>Sign In</Typography>
          </DropdownMenuItem>
        </Link>
        <Link to={"/register"}>
          {" "}
          <DropdownMenuItem className="cursor-pointer">
            <Box className="mr-2">
              <MdAccountCircle />
            </Box>
            <Typography className={"font-medium"}>Register</Typography>
          </DropdownMenuItem>
        </Link>
        <Link to={"/products"}>
          {" "}
          <DropdownMenuItem className="cursor-pointer">
            <Box className="mr-2">
              <GiClothes />
            </Box>
            <Typography className={"font-medium"}>Products</Typography>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
