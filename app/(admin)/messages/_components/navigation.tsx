import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { IconMessagePlus } from "@tabler/icons-react";
import { randomUUID } from "crypto";

import ConversationList from "./conversation-list";

export default function MessagesNavigation() {
  return (
    <Card className="hidden h-full w-80 max-w-80 md:block">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-muted-foreground">Conversation</h2>
        <Button size="icon" variant="ghost">
          <IconMessagePlus />
        </Button>
      </div>
      <ul className="divide-y">
        <ConversationList
          name="Ucluk Banana"
          lastMessage="Hello, how are you?"
          id={randomUUID()}
          time={new Date()}
          avatar="https://randomuser.me/api/portraits/men/37.jpg"
        />
      </ul>
    </Card>
  );
}
