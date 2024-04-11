import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconSend } from "@tabler/icons-react";

export default function ChatInput() {
  return (
    <div className="sticky bottom-0 w-full bg-background py-2">
      <form className="flex gap-3 pt-px">
        <Input
          inputMode="text"
          type="text"
          minLength={2}
          placeholder="Type a message..."
          required
        />
        <Button size="icon">
          <IconSend />
        </Button>
      </form>
    </div>
  );
}
