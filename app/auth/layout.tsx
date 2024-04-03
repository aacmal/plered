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
        <span className="relative my-7 block">
          <hr />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-background px-2 text-sm">
            or continue with
          </span>
        </span>
        <div className="flex gap-3">
          <Button variant="outline" className="w-full font-normal">
            <IconBrandGoogleFilled className="mr-2" />
            Google
          </Button>
          <Button variant="outline" className="w-full font-normal">
            <IconBrandX className="mr-2" />X
          </Button>
          <Button variant="outline" className="w-full font-normal">
            <IconBrandGithub className="mr-2" />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
