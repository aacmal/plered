import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";

import AuthWrapper from "../_components/auth-wrapper";

interface Props {
  searchParams: {
    token: string;
  };
}

const DUMMY_TOKEN = "secret";
export default function UpdatePasswordPage(props: Props) {
  const { token } = props.searchParams;

  // if (token !== DUMMY_TOKEN) {
  //   throw new Error("Invalid token");
  // }
  return (
    <AuthWrapper
      title="Update Password"
      subtitle="Enter your new password to reset your account"
    >
      <form className="mt-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="new_password">New Password</Label>
          <Input id="new_password" placeholder="******" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm_new_password">Confirm New Password</Label>
          <Input
            id="confirm_new_password"
            placeholder="******"
            type="password"
          />
        </div>
        <Button className="ml-auto block">Reset Password</Button>
      </form>
    </AuthWrapper>
  );
}
