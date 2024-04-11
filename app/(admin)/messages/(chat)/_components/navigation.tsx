import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DUMMY from "@/data/dummy/users.json";
import { IconMessagePlus, IconSearch } from "@tabler/icons-react";

import ConversationList from "../../_components/conversation-list";

export default function MessagesNavigation() {
  return (
    <Card className="sticky top-20 hidden max-h-[calc(100vh_-_135px)] w-80 max-w-80 md:block">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-muted-foreground">Conversation</h2>
        <Button size="icon" variant="ghost">
          <IconMessagePlus />
        </Button>
      </div>
      <div className="my-3 flex items-center gap-3">
        <IconSearch />
        <Input placeholder="Search Conversation..." />
      </div>
      <ul className="max-h-[calc(100vh_-_275px)] w-full divide-y overflow-hidden overflow-y-auto">
        {DUMMY.map((user) => (
          <ConversationList
            key={user.id}
            name={user.fullName}
            lastMessage="Hello, how are you?"
            id={user.id}
            time={new Date()}
            avatar={user.avatar}
          />
        ))}
      </ul>
    </Card>
  );
}
