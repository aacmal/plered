import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/ui/card";

export default function ConversationPage() {
  return (
    <main className="flex-1 animate-in slide-in-from-top-3">
      <Card className="flex w-full gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/37.jpg"
            alt="Ucluk Banana"
          />
          <AvatarFallback>Ucluk Banana</AvatarFallback>
        </Avatar>
        <div className="flex h-full flex-col justify-between gap-1">
          <p>Ucluk Banana</p>
          <p className="text-sm text-muted-foreground">
            Last online{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
      </Card>
    </main>
  );
}
