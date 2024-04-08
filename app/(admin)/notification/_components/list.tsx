import { renderNotificationIcon } from "@/components/notification";
import { Button } from "@/components/ui/button";
import { IconMail, IconMailOpened } from "@tabler/icons-react";

interface Props {
  type: "message" | "security" | "user" | "system";
  createdAt: Date;
  title: string;
  description: string;
  read: boolean;
}
export default function List(props: Props) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 transition-colors animate-in slide-in-from-left-4 hover:border-primary hover:bg-primary/10">
      {renderNotificationIcon(props.type)}
      <div>
        <span className="text-xs text-muted-foreground">
          {props.createdAt.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            day: "numeric",
            month: "short",
          })}
        </span>
        <h4 className="line-clamp-1 text-sm font-medium">{props.title}</h4>
        <p className="line-clamp-1 text-sm">{props.description}</p>
      </div>
      <Button variant="outline" size="icon" className="ml-auto">
        {props.read ? <IconMailOpened /> : <IconMail />}
      </Button>
    </li>
  );
}
