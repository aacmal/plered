import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandGoogleFilled,
  IconBrandX,
  IconBrandXFilled,
} from "@tabler/icons-react";
import { ReactNode } from "react";

import style from "./layout.module.css";

interface Props {
  children: ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className={cn(style.pattern, "grid min-h-screen place-items-center")}>
      <div className="w-[96%] max-w-lg rounded-2xl border bg-background p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}
