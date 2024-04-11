import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import style from "./layout.module.css";

export const metadata: Metadata = {
  title: {
    template: "%s - PLERED",
    default: "Auth",
  },
};

export const viewport: Viewport = {
  interactiveWidget: "resizes-content",
};

interface Props {
  children: ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className={cn(style.pattern, "grid min-h-screen place-items-center")}>
      <div className="w-[96%] max-w-lg rounded-2xl border bg-card p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}
