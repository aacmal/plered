import type { Metadata } from "next";

import ChangePasswordSection from "./_components/change-password";
import SessionSection from "./_components/session";
import TwoFASection from "./_components/two-fa";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Change your password, enable two-factor authentication, and more.",
};

export default function AccountSecurityPage() {
  return (
    <div className="animate-in slide-in-from-left-2">
      <header className="space-y-1">
        <h1 className="text-xl font-medium">Security</h1>
        <p className="text-sm font-light">
          Change your password, enable two-factor authentication, and more.
        </p>
      </header>
      <hr className="my-7" />
      <ChangePasswordSection />
      <hr className="my-7" />
      <TwoFASection />
      <hr className="my-7" />
      <SessionSection />
    </div>
  );
}
