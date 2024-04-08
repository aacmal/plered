import { Button } from "@/components/ui/button";
import { DividerWithText } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { Metadata } from "next";
import Link from "next/link";

import AuthWrapper from "../_components/auth-wrapper";
import OAuthProviders from "../_components/oauth-providers";

export const metadata: Metadata = {
  title: "Register",
  description: "Create an account to get started",
};

export default function RegisterPage() {
  return (
    <AuthWrapper title="Register" subtitle="Create an account to get started">
      <form className="mt-8 space-y-5">
        <div className="flex gap-3">
          <div className="w-full space-y-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input id="first_name" type="text" />
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" type="text" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="flex items-center">
          <Switch id="remember" />
          <Label htmlFor="remember" className="ml-2 font-normal">
            I agree to the{" "}
            <Link href="/terms" className="text-blue-500 hover:underline">
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button className="w-full">Register</Button>
        <p className="whitespace-nowrap text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login here.
          </Link>
        </p>
      </form>
      <DividerWithText>or continue with</DividerWithText>
      <OAuthProviders />
    </AuthWrapper>
  );
}
