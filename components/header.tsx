"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/context/sidebar-ctx";
import {
  IconLoader2,
  IconLogout,
  IconMenu,
  IconMenu2,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Link from "next/link";

import Notification from "./notification";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const ModeToggle = dynamic(() => import("./mode-toggle"), {
  ssr: false,
  loading: () => (
    <Button variant="ghost" size="icon" disabled>
      <IconLoader2 className="animate-spin" />
    </Button>
  ),
});

export default function Header() {
  const { setMinified, setOpen } = useSidebar();

  return (
    <header className="flex items-center justify-between border-b bg-card p-3 pr-5">
      <Button
        onClick={() => setMinified((prev) => !prev)}
        variant="ghost"
        size="icon"
        className="hidden lg:inline-flex"
      >
        <IconMenu2 />
      </Button>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        variant="ghost"
        size="icon"
        className="lg:hidden"
      >
        <IconMenu />
      </Button>
      <div className="flex gap-2">
        <ModeToggle />
        <Notification />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://randomuser.me/api/port" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/account">
                <IconUser size={16} className="mr-2" />
                Ucluk Banana
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings">
                <IconSettings size={16} className="mr-2" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings">
                <IconLogout size={16} className="mr-2" />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
