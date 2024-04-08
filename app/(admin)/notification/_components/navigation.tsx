"use client";

import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  IconBell,
  IconFlag,
  IconMail,
  IconMailOpened,
} from "@tabler/icons-react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function NavigationNotificationPage() {
  return (
    <Suspense>
      <Card className="group sticky top-20 h-fit w-full sm:w-64">
        <h2 className="font-medium text-muted-foreground">Filter</h2>
        <ul className="max-h-0 space-y-px overflow-hidden transition-all ease-in-out group-hover:max-h-44 sm:max-h-max">
          <li>
            <Link>
              <IconBell size={20} className="mr-2" />
              All
            </Link>
          </li>
          <li>
            <Link category="unread">
              <IconMail size={20} className="mr-2" />
              Unread
            </Link>
          </li>
          <li>
            <Link category="read">
              <IconMailOpened size={20} className="mr-2" />
              Read
            </Link>
          </li>
          <li>
            <Link category="important">
              <IconFlag size={20} className="mr-2" />
              Important
            </Link>
          </li>
        </ul>
      </Card>
    </Suspense>
  );
}

interface LinkProps {
  category?: "unread" | "read" | "important";
  children: React.ReactNode;
}
function Link({ children, category }: LinkProps) {
  const searchParams = useSearchParams();
  // function updateUid(e: React.MouseEvent<HTMLAnchorElement>) {
  //   e.preventDefault();
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set("category", category ?? "");
  //   if (!category) {
  //     params.delete("category");
  //   }
  //   window.history.replaceState(null, "", `?${params.toString()}`);
  // }

  const isActive = !category
    ? !searchParams.has("category")
    : searchParams.get("category") === category;

  return (
    <Button
      className={cn("w-full items-center justify-start border transition-all", {
        "border-border": isActive,
        "border-transparent": !isActive,
      })}
      asChild
      variant={isActive ? "default" : "ghost"}
      size="sm"
    >
      <NextLink
        href={{
          pathname: "/notification",
          query: category ? { category } : {},
        }}
        replace
      >
        {children}
      </NextLink>
    </Button>
  );
}
