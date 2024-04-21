import Wrapper from "@/components/wrapper";
import type { Metadata } from "next";

import OrdersTable from "./_components/table";

export const metadata: Metadata = {
  title: "Orders",
  description: "Manage all the orders placed by customers",
};

export default function OrdersPage() {
  return (
    <Wrapper>
      <OrdersTable />
    </Wrapper>
  );
}
