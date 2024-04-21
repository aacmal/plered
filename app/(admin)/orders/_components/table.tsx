"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Card from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { IconCalendar, IconSearch } from "@tabler/icons-react";
import { addDays, format } from "date-fns";
import Fuse from "fuse.js/min-basic";
import { useMemo, useState } from "react";
import type { DateRange } from "react-day-picker";

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

const fuseOptions = {
  keys: ["product", "orderId", "customerName", "status", "amount", "date"],
};

export default function OrdersTable() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    const fuse = new Fuse(DUMMY_RECENT_ORDERS, fuseOptions);
    return search
      ? fuse.search(search).map((result) => result.item)
      : DUMMY_RECENT_ORDERS;
  }, [search]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col-reverse justify-between gap-3 md:flex-row">
        <div className="flex w-full items-center gap-2 md:max-w-xs">
          <IconSearch className="text-muted-foreground" />
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search orders"
          />
        </div>
        <div className="flex">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  "w-full justify-start bg-card text-left font-normal shadow-sm lg:w-fit",
                  !date && "text-muted-foreground",
                )}
              >
                <IconCalendar className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Card>
        <DataTable columns={columns} data={filteredOrders} />
      </Card>
    </div>
  );
}
