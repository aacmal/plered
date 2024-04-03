import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DividerWithTextProps {
  children: ReactNode;
  className?: string;
}
export function DividerWithText({ children, className }: DividerWithTextProps) {
  return (
    <span className={cn("relative my-7 block", className)}>
      <hr />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-background px-2 text-sm">
        {children}
      </span>
    </span>
  );
}
