import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  IconDotsVertical,
  IconFileInfo,
  IconPrinter,
} from "@tabler/icons-react";
import Link from "next/link";

const DUMMY_RECENT_ORDERS = [
  {
    product: "T-Shirt",
    orderId: "ORD-2345",
    date: 1680691200000, // 2023-04-05
    customerName: "John Doe",
    amount: 29.99,
    status: "Delivered",
  },
  {
    product: "Jeans",
    orderId: "ORD-7890",
    date: 1680604800000, // 2023-04-03
    customerName: "Jane Smith",
    amount: 59.99,
    status: "Processing",
  },
  {
    product: "Hoodie",
    orderId: "ORD-1234",
    date: 1680518400000, // 2023-04-01
    customerName: "Bob Johnson",
    amount: 39.99,
    status: "Shipped",
  },
  {
    product: "Sneakers",
    orderId: "ORD-5678",
    date: 1680345600000, // 2023-03-30
    customerName: "Alice Williams",
    amount: 79.99,
    status: "Delivered",
  },
  {
    product: "Backpack",
    orderId: "ORD-9012",
    date: 1680259200000, // 2023-03-28
    customerName: "Tom Davis",
    amount: 49.99,
    status: "Canceled",
  },
  {
    product: "Backpack",
    orderId: "ORD-5128",
    date: 1680345600000, // 2023-03-30
    customerName: "Alice Williams",
    amount: 30.99,
    status: "Delivered",
  },
];
export default function RecentOrders() {
  return (
    <Card className="relative">
      <h2 className="text-lg font-medium">Recent orders</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DUMMY_RECENT_ORDERS.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>${order.amount}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-7" size="icon">
                      <IconDotsVertical size={15} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" side="left">
                    <DropdownMenuItem>
                      <IconFileInfo className="mr-2" size={20} />
                      Detail order
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <IconPrinter className="mr-2" size={20} />
                      Print order
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>
          <Link href="/orders" className="link">
            View all orders
          </Link>
        </TableCaption>
      </Table>
    </Card>
  );
}
