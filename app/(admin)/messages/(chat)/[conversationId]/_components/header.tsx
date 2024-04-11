import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconArchive,
  IconBarrierBlock,
  IconDotsVertical,
  IconTrash,
} from "@tabler/icons-react";

interface Props {
  fullName: string;
  lastOnline: Date;
  avatar: string;
}

export default function ConversationHeader(props: Props) {
  const lastOnline = props.lastOnline.toLocaleDateString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <Card className="sticky top-20 flex w-full items-center gap-3">
      <Avatar className="h-12 w-12">
        <AvatarImage src={props.avatar} alt={props.fullName} />
        <AvatarFallback>{props.fullName}</AvatarFallback>
      </Avatar>
      <div className="flex h-full flex-col justify-between gap-1">
        <p>{props.fullName}</p>
        <p className="text-sm text-muted-foreground">
          Last online <time>{lastOnline}</time>
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto h-8 w-8" size="icon">
            <IconDotsVertical size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left" align="start">
          <DropdownMenuItem>
            <IconBarrierBlock className="mr-2" size={20} />
            Block User
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconArchive className="mr-2" size={20} />
            Archive
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconTrash className="mr-2" size={20} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
}
