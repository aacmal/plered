import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { IconDotsVertical, IconShare2 } from "@tabler/icons-react";

interface Props {
  title: string;
  value: number;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}
export default function MetricCard(props: Props) {
  const value = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.value);
  return (
    <Card className="space-y-2 shadow-lg">
      <div className="flex justify-between">
        <span className="text-sm ">{props.title}</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-6 w-6" variant="ghost" size="icon">
              <IconDotsVertical size={15} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <IconShare2 className="mr-2 w-4" />
              Go to details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn("rounded p-1 text-white", props.color)}>
            {props.icon}
          </div>
          <span className="text-lg font-medium">{value}</span>
        </div>
        <div>
          <span
            className={cn(
              "text-xl font-medium",
              props.percentage > 0 ? "text-green-500" : "text-red-500",
            )}
          >
            {props.percentage > 0 ? "+" : ""}
            {props.percentage}%
          </span>
        </div>
      </div>
      <div className="text-right text-sm text-accent-foreground">
        Since last month
      </div>
    </Card>
  );
}
