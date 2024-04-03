import {
  IconBellFilled,
  IconLock,
  IconMessage,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type NotificationType = "message" | "security" | "user" | "system";
const notifications = [
  {
    id: 1,
    createdAt: new Date(),
    type: "message",
    title: "New message",
    description: "You have a new message from Ucluk Banana",
  },
  {
    id: 2,
    createdAt: new Date(),
    type: "security",
    title: "Security alert",
    description: "Your account password has been updated",
  },
  {
    id: 3,
    createdAt: new Date(),
    type: "user",
    title: "Your account has been kyc verified",
    description: "You can now deposit and withdraw funds",
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
  },
];

export default function Notification() {
  const renderNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "message":
        return <IconMessage size={22} />;
      case "security":
        return <IconLock size={22} />;
      case "user":
        return <IconUser size={22} />;
      case "system":
        return <IconSettings size={22} />;
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <IconBellFilled />
          <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-red-500 text-xs font-normal text-white">
            2
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-xs p-2" side="top" align="end">
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-secondary"
            >
              {renderNotificationIcon(notification.type as NotificationType)}
              <div>
                <span className="text-xs text-muted-foreground">
                  {notification.createdAt.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    day: "numeric",
                    month: "short",
                  })}
                </span>
                <h4 className="line-clamp-1 text-sm font-semibold">
                  {notification.title}
                </h4>
                <p className="line-clamp-1 text-xs">
                  {notification.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <hr className="my-2" />
        <Button variant="ghost" size="sm" asChild className="w-full text-xs">
          <Link href="/notifications">View all notifications</Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
}
