import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";

export default function TwoFASection() {
  return (
    <section>
      <div className="space-y-1">
        <h2 className="text-lg font-medium">Two-Factor Authentication</h2>
        <p className="text-sm font-light">
          Add an extra layer of security to your account.
        </p>
      </div>
      <form className="mt-3 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="authenticator_key">Authenticator Key</Label>
          <Input id="authenticator_key" type="text" />
        </div>
        <Button className="ml-auto block">
          Enable Two-Factor Authentication
        </Button>
      </form>
    </section>
  );
}
