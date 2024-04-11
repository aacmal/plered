import ChatInput from "./_components/chat-input";
import Chats from "./_components/chats";
import ConversationHeader from "./_components/header";

export default function ConversationPage() {
  return (
    <main className="flex flex-1 flex-col duration-500 animate-in fade-in-25 slide-in-from-left-3">
      <ConversationHeader
        fullName="Ucluk Banana"
        avatar="https://randomuser.me/api/portraits/men/37.jpg"
        lastOnline={new Date()}
      />
      <div className="mx-auto flex w-full max-w-screen-lg flex-1 flex-col">
        <Chats />
        <ChatInput />
      </div>
    </main>
  );
}
