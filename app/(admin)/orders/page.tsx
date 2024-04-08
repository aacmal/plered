import Wrapper from "@/components/wrapper";
import type { Metadata } from "next";

import Filter from "./_components/filter";
import OrdersTable from "./_components/table";

export const metadata: Metadata = {
  title: "Orders",
  description: "Manage all the orders placed by customers",
};

export default function OrdersPage() {
  return (
    <Wrapper className="space-y-4">
      <Filter />
      <OrdersTable />
    </Wrapper>
  );
}
