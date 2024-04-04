"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-3 h-fit w-full space-y-2 rounded-lg border bg-card p-3 text-sm shadow sm:max-w-72">
      <ul className="space-y-2">
        <NavLink href="/account" isActive={pathname === "/account/"}>
          General
        </NavLink>
        <NavLink
          href="/account/security"
          isActive={pathname === "/account/security/"}
        >
          Security
        </NavLink>
      </ul>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}
function NavLink(props: NavLinkProps) {
  return (
    <li>
      <Button
        className={cn("block h-fit w-full border transition-all", {
          "border-border py-2": props.isActive,
          "border-transparent py-1": !props.isActive,
        })}
        asChild
        variant={props.isActive ? "secondary" : "ghost"}
        size="sm"
      >
        <Link href={props.href}>{props.children}</Link>
      </Button>
    </li>
  );
}
