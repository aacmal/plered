import Communication from "@/assets/illustration/communication";
import Wrapper from "@/components/wrapper";

export default function MessagesPage() {
  return (
    <Wrapper width="max" className="grid flex-1 place-items-center">
      <div className="w-2/3 max-w-sm space-y-5 text-center">
        <Communication className="w-full dark:text-cyan-200" />
        <p className="text-xl">Select Conversation</p>
      </div>
    </Wrapper>
  );
}
