import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import type { Metadata } from "next";
import Link from "next/link";

import AuthWrapper from "../_components/auth-wrapper";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot your password? Reset it here",
};

export default function ForgotPasswordPage() {
  return (
    <AuthWrapper
      title="Forgot Password"
      subtitle="Enter your email to reset your password"
    >
      <form action="/reset-password?token=secret" className="mt-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="your@email.co" type="email" />
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" asChild>
            <Link href="/login">Back to login</Link>
          </Button>
          <Button type="submit">Send Reset Link</Button>
        </div>
      </form>
    </AuthWrapper>
  );
}
