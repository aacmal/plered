import Card from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

import type { Order } from "./columns";
import { columns } from "./columns";

const DUMMY_RECENT_ORDERS = [
  {
    product: "T-Shirt",
    orderId: "ORD-2345",
    date: new Date(1680691200000), // 2023-04-05
    customerName: "John Doe",
    amount: 29.99,
    status: "delivered",
  },
  {
    product: "Jeans",
    orderId: "ORD-7890",
    date: new Date(1680604800000), // 2023-04-03
    customerName: "Jane Smith",
    amount: 59.99,
    status: "processing",
  },
  {
    product: "Hoodie",
    orderId: "ORD-1234",
    date: new Date(1680518400000), // 2023-04-01
    customerName: "Bob Johnson",
    amount: 39.99,
    status: "shipped",
  },
  {
    product: "Sneakers",
    orderId: "ORD-5678",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 79.99,
    status: "delivered",
  },
  {
    product: "Backpack",
    orderId: "ORD-9012",
    date: new Date(1680259200000), // 2023-03-28
    customerName: "Tom Davis",
    amount: 49.99,
    status: "canceled",
  },
  {
    product: "Backpack",
    orderId: "ORD-5128",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 30.99,
    status: "delivered",
  },
  {
    product: "T-Shirt",
    orderId: "ORD-2345",
    date: new Date(1680691200000), // 2023-04-05
    customerName: "John Doe",
    amount: 29.99,
    status: "delivered",
  },
  {
    product: "Jeans",
    orderId: "ORD-7890",
    date: new Date(1680604800000), // 2023-04-03
    customerName: "Jane Smith",
    amount: 59.99,
    status: "processing",
  },
  {
    product: "Hoodie",
    orderId: "ORD-1234",
    date: new Date(1680518400000), // 2023-04-01
    customerName: "Bob Johnson",
    amount: 39.99,
    status: "shipped",
  },
  {
    product: "Sneakers",
    orderId: "ORD-5678",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 79.99,
    status: "delivered",
  },
  {
    product: "Backpack",
    orderId: "ORD-9012",
    date: new Date(1680259200000), // 2023-03-28
    customerName: "Tom Davis",
    amount: 49.99,
    status: "canceled",
  },
  {
    product: "Backpack",
    orderId: "ORD-5128",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 30.99,
    status: "delivered",
  },
  {
    product: "T-Shirt",
    orderId: "ORD-2345",
    date: new Date(1680691200000), // 2023-04-05
    customerName: "John Doe",
    amount: 29.99,
    status: "delivered",
  },
  {
    product: "Jeans",
    orderId: "ORD-7890",
    date: new Date(1680604800000), // 2023-04-03
    customerName: "Jane Smith",
    amount: 59.99,
    status: "processing",
  },
  {
    product: "Hoodie",
    orderId: "ORD-1234",
    date: new Date(1680518400000), // 2023-04-01
    customerName: "Bob Johnson",
    amount: 39.99,
    status: "shipped",
  },
  {
    product: "Sneakers",
    orderId: "ORD-5678",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 79.99,
    status: "delivered",
  },
  {
    product: "Backpack",
    orderId: "ORD-9012",
    date: new Date(1680259200000), // 2023-03-28
    customerName: "Tom Davis",
    amount: 49.99,
    status: "canceled",
  },
  {
    product: "Backpack",
    orderId: "ORD-5128",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 30.99,
    status: "delivered",
  },
  {
    product: "T-Shirt",
    orderId: "ORD-2345",
    date: new Date(1680691200000), // 2023-04-05
    customerName: "John Doe",
    amount: 29.99,
    status: "delivered",
  },
  {
    product: "Jeans",
    orderId: "ORD-7890",
    date: new Date(1680604800000), // 2023-04-03
    customerName: "Jane Smith",
    amount: 59.99,
    status: "processing",
  },
  {
    product: "Hoodie",
    orderId: "ORD-1234",
    date: new Date(1680518400000), // 2023-04-01
    customerName: "Bob Johnson",
    amount: 39.99,
    status: "shipped",
  },
  {
    product: "Sneakers",
    orderId: "ORD-5678",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 79.99,
    status: "delivered",
  },
  {
    product: "Backpack",
    orderId: "ORD-9012",
    date: new Date(1680259200000), // 2023-03-28
    customerName: "Tom Davis",
    amount: 49.99,
    status: "canceled",
  },
  {
    product: "Backpack",
    orderId: "ORD-5128",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 30.99,
    status: "delivered",
  },
  {
    product: "T-Shirt",
    orderId: "ORD-2345",
    date: new Date(1680691200000), // 2023-04-05
    customerName: "John Doe",
    amount: 29.99,
    status: "delivered",
  },
  {
    product: "Jeans",
    orderId: "ORD-7890",
    date: new Date(1680604800000), // 2023-04-03
    customerName: "Jane Smith",
    amount: 59.99,
    status: "processing",
  },
  {
    product: "Hoodie",
    orderId: "ORD-1234",
    date: new Date(1680518400000), // 2023-04-01
    customerName: "Bob Johnson",
    amount: 39.99,
    status: "shipped",
  },
  {
    product: "Sneakers",
    orderId: "ORD-5678",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 79.99,
    status: "delivered",
  },
  {
    product: "Backpack",
    orderId: "ORD-9012",
    date: new Date(1680259200000), // 2023-03-28
    customerName: "Tom Davis",
    amount: 49.99,
    status: "canceled",
  },
  {
    product: "Backpack",
    orderId: "ORD-5128",
    date: new Date(1680345600000), // 2023-03-30
    customerName: "Alice Williams",
    amount: 30.99,
    status: "delivered",
  },
] as Order[];

export default function OrdersTable() {
  return (
    <Card>
      <DataTable columns={columns} data={DUMMY_RECENT_ORDERS} />
    </Card>
  );
}
