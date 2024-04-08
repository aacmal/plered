import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General",
};

export default function AccountPage() {
  return (
    <div className="animate-in slide-in-from-left-2">
      <header className="space-y-1">
        <h1 className="text-xl font-medium">General</h1>
        <p className="text-sm font-light">
          Edit your account details, such as your name, and avatar.
        </p>
      </header>
      <hr className="my-5" />
      <form className="space-y-4">
        <Avatar className="mx-auto h-16 w-16">
          <AvatarImage src="https://i.pravatar.cc/150?img=68" />
          <AvatarFallback>UB</AvatarFallback>
        </Avatar>
        <div className="w-full space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input defaultValue="ucluk@banana.email" id="email" type="email" />
        </div>
        <div className="flex gap-3">
          <div className="w-full space-y-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input defaultValue="Ucluk" id="first_name" type="text" />
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input defaultValue="Banana" id="last_name" type="text" />
          </div>
        </div>
        <Button className="ml-auto block">Save Changes</Button>
      </form>
    </div>
  );
}
