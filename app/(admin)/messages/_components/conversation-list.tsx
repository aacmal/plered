import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: Date;
}
export default function ConversationList(props: Props) {
  const time = props.time.toLocaleDateString();
  return (
    <li>
      <Button
        className="h-auto w-full justify-start gap-3"
        variant="ghost"
        asChild
      >
        <Link href={`/messages/${props.id}`}>
          <Avatar>
            <AvatarImage src={props.avatar} alt={props.name} />
            <AvatarFallback>{props.name}</AvatarFallback>
          </Avatar>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full justify-between">
              <p>{props.name}</p>
              <p className="text-xs font-light">{time}</p>
            </div>
            <p className="font-normal text-muted-foreground">
              {props.lastMessage}
            </p>
          </div>
        </Link>
      </Button>
    </li>
  );
}
