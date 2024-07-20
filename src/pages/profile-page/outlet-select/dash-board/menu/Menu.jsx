import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stack } from "@mui/material";
import Product from "./product/Product";
import { DateForm } from "@/components/DateForm";
import { useState } from "react";

export default function MenuDashBoard() {
  const [value, setValue] = useState("overview");
  const tabs = [
    {
      value: "overview",
      trigger: "Overview",
      content: "",
    },
    {
      value: "user",
      trigger: "User",
      content: "",
    },
    {
      value: "product",
      trigger: "Product",
      content: <Product />,
    },
    {
      value: "order",
      trigger: "Order",
      content: "",
    },
  ];

  return (
    <Tabs
      defaultValue="account"
      className="w-full"
      value={value}
      onValueChange={setValue}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <TabsList>
          {tabs.map((tab, index) => (
            <TabsTrigger key={index} value={tab.value}>
              {tab.trigger}
            </TabsTrigger>
          ))}
        </TabsList>
        <DateForm className="w-[30%]" />
      </Stack>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
