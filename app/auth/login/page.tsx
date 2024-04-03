import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main>
      <h1 className="text-lg font-medium">Login</h1>
      <p className="font-light">Enter your credentials to login</p>
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
          <Link href="/auth/forgot-password" className="text-sm">
            Forgot password?
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <p className="whitespace-nowrap text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-blue-500 hover:underline"
            >
              Register here.
            </Link>
          </p>
          <Button className="w-full">Login</Button>
        </div>
      </form>
    </main>
  );
}
