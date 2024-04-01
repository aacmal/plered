"use client";

import { useSidebar } from "@/context/sidebar-ctx";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { IconCategoryFilled, IconDashboard } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import { Sheet, SheetContent } from "./ui/sheet";

export default function Sidebar() {
  const { open, setOpen } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-4/5 max-w-96 p-2">
          <SidebarContent className="md:hidden" />
        </SheetContent>
      </Sheet>
    );
  }

  return <SidebarContent className="border-r" />;
}

interface SidebarProps {
  className?: string;
}
function SidebarContent(props: SidebarProps) {
  const pathname = usePathname();
  const { minified } = useSidebar();

  return (
    <div className={props.className}>
      <div className="px-3 py-2">
        <h1
          className={cn(
            "mx-auto my-4 overflow-hidden rounded text-center text-lg font-semibold  transition-all",
            {
              "max-w-[1ch] duration-75": minified,
              "max-w-[10ch] bg-primary text-primary-foreground duration-1000":
                !minified,
            },
          )}
        >
          PLERED
        </h1>
        <div className="flex flex-col gap-2">
          <SidebarLink
            isActive={pathname === "/"}
            icon={<IconCategoryFilled size={20} />}
            href="/"
            minified={minified}
          >
            Dashboard
          </SidebarLink>
        </div>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  isActive?: boolean;
  minified?: boolean;
  icon: React.ReactNode;
  href: string;
  children: React.ReactNode;
}
function SidebarLink(props: SidebarLinkProps) {
  return (
    <Button
      variant={props.isActive ? "secondary" : "ghost"}
      className={cn("h-auto w-full justify-center gap-2 py-3 transition-all", {
        "md:gap-2": !props.minified,
        "md:gap-0": props.minified,
      })}
      asChild
    >
      <Link href={props.href}>
        {props.icon}
        <span
          className={cn(
            "block w-full overflow-hidden transition-all ease-in-out",
            {
              "md:w-0": props.minified,
              "md:w-52": !props.minified,
            },
          )}
        >
          {props.children}
        </span>
      </Link>
    </Button>
  );
}
