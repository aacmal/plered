import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";

export default function ChangePasswordSection() {
  return (
    <section>
      <div className="space-y-1">
        <h2 className="text-lg font-medium">Change Password</h2>
        <p className="text-sm font-light">
          Ensure your account is secure by changing your password regularly.
        </p>
      </div>
      <form className="mt-3 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current_password">Current Password</Label>
          <Input id="current_password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new_password">New Password</Label>
          <Input id="new_password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input id="confirm_password" type="password" />
        </div>
        <Button className="ml-auto block">Change Password</Button>
      </form>
    </section>
  );
}
