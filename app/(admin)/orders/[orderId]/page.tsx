import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Label from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import Wrapper from "@/components/wrapper";
import { cn } from "@/lib/utils";
import {
  IconCalendarEvent,
  IconDeviceFloppy,
  IconPrinter,
  IconShoppingCart,
  IconTruck,
  IconUser,
} from "@tabler/icons-react";

const statusColors = {
  processing: "bg-yellow-500",
  pending: "bg-gray-500",
  shipped: "bg-blue-500",
  delivered: "bg-green-500",
  canceled: "bg-red-500",
};

const DUMMY_DATA = {
  product: "T-Shirt",
  orderId: "ORD-2345",
  date: new Date(1680691200000), // 2023-04-05
  customer: {
    name: "John Doe",
    email: "johndoe@imail.id",
    phone: "1234 5678 9012",
  },
  order: {
    shipping: "I AM Ninja Express",
    payment: "Credit Card",
  },
  deliverTo: {
    name: "John Doe",
    address: "1234 Main St, Bikini Buttom 12345, SEA",
  },
  amount: 29.99,
  status: "delivered",
  products: [
    {
      name: "T-Shirt",
      price: 29.99,
      quantity: 1,
      total: 29.99,
    },
    {
      name: "Hoodie",
      price: 49.99,
      quantity: 1,
      total: 49.99,
    },
    {
      name: "Socks",
      price: 9.99,
      quantity: 2,
      total: 19.98,
    },
    {
      name: "Hat",
      price: 14.99,
      quantity: 1,
      total: 14.99,
    },
  ],
};

interface Props {
  params: {
    orderId: string;
  };
}
export default function OrderDetailPage(props: Props) {
  const { orderId } = props.params;
  return (
    <Wrapper className="animate-in slide-in-from-left-4">
      <Card className="space-y-5">
        <strong>Order ID: #{orderId}</strong>
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row lg:items-center">
          <span className="inline-flex items-center">
            <IconCalendarEvent className="mr-2 h-4 w-4" />
            <time>
              {new Date(DUMMY_DATA.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </time>
          </span>
          <div className="flex gap-3">
            <Select defaultValue="pending">
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Pending" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Order status</SelectLabel>
                  <SelectSeparator />
                  <SelectItem value="pending">
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "mr-2 h-2 w-2 rounded-full",
                          statusColors.pending,
                        )}
                      />
                      Pending
                    </div>
                  </SelectItem>
                  <SelectItem value="processing">
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "mr-2 h-2 w-2 rounded-full",
                          statusColors.processing,
                        )}
                      />
                      Processing
                    </div>
                  </SelectItem>
                  <SelectItem value="shipped">
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "mr-2 h-2 w-2 rounded-full",
                          statusColors.shipped,
                        )}
                      />
                      Shipped
                    </div>
                  </SelectItem>
                  <SelectItem value="delivered">
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "mr-2 h-2 w-2 rounded-full",
                          statusColors.delivered,
                        )}
                      />
                      Delivered
                    </div>
                  </SelectItem>
                  <SelectItem value="canceled">
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "mr-2 h-2 w-2 rounded-full",
                          statusColors.canceled,
                        )}
                      />
                      Canceled
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button size="sm">
              <IconDeviceFloppy className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button size="sm" variant="outline">
              <IconPrinter className="mr-2 h-4 w-4" />
              Print
            </Button>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap items-start justify-around gap-3 text-sm">
          <section className="flex gap-3">
            <IconUser className="h-6 w-6" />
            <div>
              <strong className="font-medium">Customer</strong>
              <table className="whitespace-nowrap text-secondary-foreground">
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td className="px-1">:</td>
                    <td>{DUMMY_DATA.customer.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td className="px-1">:</td>
                    <td>{DUMMY_DATA.customer.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td className="px-1">:</td>
                    <td>{DUMMY_DATA.customer.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="flex gap-3">
            <IconShoppingCart className="h-6 w-6" />
            <div>
              <strong className="font-medium">Order</strong>
              <table className="whitespace-nowrap text-secondary-foreground">
                <tbody>
                  <tr>
                    <td>Shipping</td>
                    <td className="px-1">:</td>
                    <td>{DUMMY_DATA.order.shipping}</td>
                  </tr>
                  <tr>
                    <td>Payment</td>
                    <td className="px-1">:</td>
                    <td>{DUMMY_DATA.order.payment}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="flex gap-3">
            <IconTruck className="h-6 w-6" />
            <div>
              <strong className="font-medium">Deliver to</strong>
              <table className="text-secondary-foreground">
                <tbody>
                  <tr className="align-top">
                    <td>Address</td>
                    <td className="px-1">:</td>
                    <td>{DUMMY_DATA.deliverTo.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <section className="h-fit w-full max-w-xs md:max-w-xs">
            <Label>Notes</Label>
            <Textarea readOnly />
          </section>
          <section className="flex-1">
            <p className="font-medium">Products</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {DUMMY_DATA.products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>${product.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        </div>
        <div className="ml-auto w-full space-y-1 text-sm text-secondary-foreground md:max-w-xs">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${DUMMY_DATA.amount}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$5.00</span>
          </div>
          <hr />
          <div className="flex justify-between text-base font-medium">
            <span>Total</span>
            <span>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(DUMMY_DATA.amount + 5)}
            </span>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
}
