import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Product from "./product/Product";
import { DateForm } from "@/components/DateForm";
import { useState } from "react";
import OrderDashBoard from "./order-dashboard/OrderDashBoard";
import UserDashBoard from "./user/UserDashBoard";

const tabs = [
  {
    value: "overview",
    trigger: "Overview",
    content: "",
  },
  {
    value: "user",
    trigger: "User",
    content: <UserDashBoard />,
  },
  {
    value: "product",
    trigger: "Product",
    content: <Product />,
  },
  {
    value: "order",
    trigger: "Order",
    content: <OrderDashBoard />,
  },
];

export default function MenuDashBoard() {
  const [value, setValue] = useState("overview");
  return (
    <Tabs
      defaultValue="account"
      className="w-full"
      value={value}
      onValueChange={setValue}
    >
      <div className="md:flex items-center justify-between gap-5 w-full">
        <TabsList>
          {tabs.map((tab, index) => (
            <TabsTrigger key={index} value={tab.value}>
              {tab.trigger}
            </TabsTrigger>
          ))}
        </TabsList>
        <DateForm className="md:w-[30%]" />
      </div>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
