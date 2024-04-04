import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  width?: "max" | "min";
  children: ReactNode;
  className?: string;
}
export default function Wrapper({ width = "min", children, className }: Props) {
  return (
    <main
      className={cn(
        "relative w-full p-5 duration-300 animate-in fade-in-50 lg:p-6",
        {
          "max-w-full": width === "max",
          "mx-auto max-w-7xl": width === "min",
        },
        className,
      )}
    >
      {children}
    </main>
  );
}
