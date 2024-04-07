import Card from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import Wrapper from "@/components/wrapper";

import { Order, columns } from "./_components/columns";
import Filter from "./_components/filter";
import Table from "./_components/table";

export default function OrdersPage() {
  return (
    <Wrapper className="space-y-2">
      <Filter />
      <Table />
    </Wrapper>
  );
}
