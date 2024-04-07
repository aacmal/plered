import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

const DUMMY_SELLERS = [
  {
    name: "John Doe",
    company: "Google",
    revenue: 12000,
    sales: 185,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Jane Doe",
    company: "Facebook",
    revenue: 11500,
    sales: 172,
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "John Smith",
    company: "Amazon",
    revenue: 9800,
    sales: 168,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Jane Smith",
    company: "Apple",
    revenue: 8800,
    sales: 150,
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "John Doe",
    company: "Google",
    revenue: 12000,
    sales: 185,
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
  },
];

interface Props {
  className?: string;
}
export default function BestSellers(props: Props) {
  return (
    <Card className={cn("h-fit", props.className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Best sellers</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-6 w-6" size="icon">
              <IconDotsVertical size={15} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="left">
            <DropdownMenuItem>Manage sellers</DropdownMenuItem>
            <DropdownMenuItem>Revenue report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ul className="divide-y">
        {DUMMY_SELLERS.map((seller, index) => (
          <List key={index} index={index} {...seller} />
        ))}
      </ul>
    </Card>
  );
}

interface ListProps {
  name: string;
  company: string;
  revenue: number;
  sales: number;
  avatar: string;
  index: number;
}
function List(props: ListProps) {
  const rev = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.revenue);
  return (
    <li className="flex items-center gap-2 py-2">
      <Avatar className="rounded-xl">
        <AvatarImage src={props.avatar} />
        <AvatarFallback className="line-clamp-1 rounded-none text-xs">
          {props.name}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <p className="">{props.name}</p>
        <p className="text-sm text-gray-500">{props.company}</p>
      </div>
      <div className="ml-auto flex flex-col items-end gap-1">
        <p className="font-medium">{rev}</p>
        <p className="text-sm text-gray-500">{props.sales} sales</p>
      </div>
    </li>
  );
}
