import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper";
import DUMMY from "@/data/dummy/users.json";
import { IconSearch } from "@tabler/icons-react";

import ConversationList from "./_components/conversation-list";

export default function MessagesPage() {
  return (
    <Wrapper width="min" className="max-w-screen-lg lg:p-4">
      <div className="rounded-xl border bg-card p-4">
        <div className="mx-auto mb-6 flex w-full max-w-md items-center gap-3">
          <IconSearch />
          <Input placeholder="Search Conversation..." />
        </div>
        <ul className="divide-y">
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
      </div>
    </Wrapper>
  );
}
