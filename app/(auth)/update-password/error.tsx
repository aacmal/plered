"use client";

import Abstract from "@/assets/illustration/abstract";
import Link from "next/link";

import AuthWrapper from "../_components/auth-wrapper";

export default function ResetPasswordErrorPage() {
  return (
    <AuthWrapper
      title="Invalid Token"
      subtitle="The token provided is invalid. Please request a new password reset link."
    >
      <Abstract className="mt-8 h-60" />
      <p className="text-center text-sm">
        You can request a new password reset link by visiting the{" "}
        <Link href="/forgot-password" className="text-blue-500 hover:underline">
          forgot password
        </Link>{" "}
        page.
      </p>
    </AuthWrapper>
  );
}
