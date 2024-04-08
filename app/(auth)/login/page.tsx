import { Button } from "@/components/ui/button";
import { DividerWithText } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Metadata } from "next";
import Link from "next/link";

import AuthWrapper from "../_components/auth-wrapper";
import OAuthProviders from "../_components/oauth-providers";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account to continue",
};

export default function LoginPage() {
  return (
    <AuthWrapper title="Login" subtitle="Enter your credentials to login">
      <form className="mt-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Switch id="remember" />
            <Label htmlFor="remember" className="ml-2 font-normal">
              Remember me
            </Label>
          </div>
          <Link href="/forgot-password" className="link text-sm">
            Forgot password?
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <p className="whitespace-nowrap text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="link">
              Register here.
            </Link>
          </p>
          <Button className="w-full">Login</Button>
        </div>
      </form>
      <DividerWithText className="bg-card">or continue with</DividerWithText>
      <OAuthProviders />
    </AuthWrapper>
  );
}
