import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/ui/card";

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
    <Card className="sticky top-20 flex w-full gap-3">
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
    </Card>
  );
}
