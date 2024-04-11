"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: Date;
}
export default function ConversationList(props: Props) {
  const time = props.time.toLocaleDateString();
  const conversationId = useParams().conversationId as string;

  const isCurrent = conversationId === props.id;

  return (
    <li className="py-1">
      <Button
        className="h-auto w-full justify-start gap-3 border border-transparent hover:border-primary/50"
        variant={isCurrent ? "secondary" : "ghost"}
        asChild
      >
        <Link href={`/messages/${props.id}`}>
          <Avatar>
            <AvatarImage src={props.avatar} alt={props.name} />
            <AvatarFallback>{props.name}</AvatarFallback>
          </Avatar>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full justify-between">
              <p className="max-w-32 truncate">{props.name}</p>
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
