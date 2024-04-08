"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  IconArrowsUpDown,
  IconClipboardList,
  IconDots,
  IconFileDescription,
} from "@tabler/icons-react";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

const statusColors = {
  processing:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  shipped: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
  delivered:
    "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
  canceled: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
};

export type Order = {
  product: string;
  orderId: string;
  date: Date;
  customerName: string;
  amount: number;
  status: "processing" | "shipped" | "delivered" | "canceled";
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <IconArrowsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) =>
      new Date(row.getValue("date")).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <IconArrowsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(row.getValue("amount")),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <IconArrowsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <span
          className={cn(
            "inline-block rounded-full px-2 py-1 text-center text-xs font-medium",
            statusColors[status as Order["status"]],
          )}
        >
          {status as string}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <IconDots className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="left">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.orderId)}
            >
              <IconClipboardList className="mr-2 h-4 w-4" />
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>
              <IconUser className="mr-2 h-4 w-4" />
              View customer
            </DropdownMenuItem> */}
            <DropdownMenuItem asChild>
              <Link href={`/orders/${order.orderId}`}>
                <IconFileDescription className="mr-2 h-4 w-4" />
                View order details
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
