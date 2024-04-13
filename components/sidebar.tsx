"use client";

import { useSidebar } from "@/context/sidebar-ctx";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  IconCategory,
  IconChevronDown,
  IconFileDescription,
  IconLock,
  IconMessage,
  IconTags,
  IconVocabulary,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
} from "react";
import { forwardRef, useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Sheet, SheetContent } from "./ui/sheet";

export default function Sidebar() {
  const { open, setOpen } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (!isDesktop) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-4/5 max-w-96 p-2">
          <SidebarContent className="lg:hidden" />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <SidebarContent className="sticky top-0 hidden h-screen border-r lg:block" />
  );
}

interface SidebarProps {
  className?: string;
}
function SidebarContent(props: SidebarProps) {
  const pathname = usePathname();
  const { minified, setMinified } = useSidebar();
  const [accordionState, setAccordionState] = useState<string[]>([]);

  useEffect(() => {
    if (pathname.includes("authentication") || pathname.includes("pages")) {
      const path = pathname.split("/")[1];
      setAccordionState([path]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (minified) {
      setAccordionState([]);
    }
  }, [minified]);

  useEffect(() => {
    if (accordionState.length > 0) {
      setMinified(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordionState]);

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
        <AccordionPrimitive.Root
          type="multiple"
          className="flex flex-col gap-2"
          value={accordionState}
          onValueChange={setAccordionState}
        >
          <SidebarLink
            isActive={pathname === "/"}
            icon={<IconCategory size={20} />}
            href="/"
            minified={minified}
          >
            Dashboard
          </SidebarLink>
          <SidebarLink
            isActive={pathname.includes("messages")}
            icon={<IconMessage size={20} />}
            href="/messages"
            minified={minified}
          >
            Messages
          </SidebarLink>
          <SidebarLink
            isActive={pathname.includes("orders")}
            icon={<IconVocabulary size={20} />}
            href="/orders"
            minified={minified}
          >
            Orders
          </SidebarLink>
          <SidebarLink
            isActive={pathname.includes("pricing")}
            icon={<IconTags size={20} />}
            href="/pricing"
            minified={minified}
          >
            Pricing
          </SidebarLink>
          <SidebarSub value="authentication">
            <SidebarSubTrigger
              minified={minified}
              icon={<IconLock size={20} />}
            >
              Authentication
            </SidebarSubTrigger>
            <SidebarSubContent>
              <SidebarSubLink isActive={pathname === "/login/"} href="/login">
                Login
              </SidebarSubLink>
              <SidebarSubLink
                isActive={pathname === "/register/"}
                href="/register"
              >
                Register
              </SidebarSubLink>
              <SidebarSubLink
                isActive={pathname === "/forgot-password/"}
                href="/forgot-password"
              >
                Forgot Password
              </SidebarSubLink>
              <SidebarSubLink
                isActive={pathname === "/forgot-password/"}
                href="/reset-password?token=secret"
              >
                Update Password
              </SidebarSubLink>
            </SidebarSubContent>
          </SidebarSub>
          <SidebarSub value="pages">
            <SidebarSubTrigger
              minified={minified}
              icon={<IconFileDescription size={20} />}
            >
              Pages
            </SidebarSubTrigger>
            <SidebarSubContent>
              <SidebarSubLink
                isActive={pathname === "/pages/error/"}
                href="/pages/error"
              >
                Error
              </SidebarSubLink>
              <SidebarSubLink
                isActive={pathname === "/pages/error-500/"}
                href="/pages/error-500"
              >
                500 (Internal Server Error)
              </SidebarSubLink>
              <SidebarSubLink
                isActive={pathname === "/pages/error-404/"}
                href="/pages/error-404"
              >
                404 (Not Found)
              </SidebarSubLink>
              <SidebarSubLink
                isActive={pathname === "/pages/error-400/"}
                href="/pages/error-400"
              >
                400 (Bad Request)
              </SidebarSubLink>
            </SidebarSubContent>
          </SidebarSub>
        </AccordionPrimitive.Root>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  isActive?: boolean;
  minified?: boolean;
  icon: ReactNode;
  href: string;
  children: ReactNode;
}
function SidebarLink(props: SidebarLinkProps) {
  return (
    <Button
      variant={props.isActive ? "default" : "ghost"}
      className={cn(
        "h-auto w-full justify-center gap-2 rounded-lg py-3 transition-all",
        {
          "lg:gap-2": !props.minified,
          "lg:gap-0": props.minified,
          "text-muted-foreground": !props.isActive,
        },
      )}
      asChild
    >
      <Link href={props.href}>
        {props.icon}
        <span
          className={cn(
            "block w-full overflow-hidden transition-all ease-in-out",
            {
              "lg:w-0": props.minified,
              "lg:w-52": !props.minified,
            },
          )}
        >
          {props.children}
        </span>
      </Link>
    </Button>
  );
}

const SidebarSub = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => <AccordionPrimitive.Item ref={ref} {...props} />);

SidebarSub.displayName = "SidebarSub";

const SidebarSubTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    icon: ReactNode;
    minified?: boolean;
  }
>(({ children, icon, minified, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger ref={ref} asChild {...props}>
      <Button
        variant="ghost"
        className={cn(
          "group h-auto w-full gap-2 py-3 text-start text-muted-foreground transition-all data-[state=open]:text-primary",
          {
            "lg:gap-2": !minified,
            "lg:gap-0": minified,
          },
        )}
      >
        {icon}
        <span
          className={cn(
            "flex w-full items-center overflow-hidden transition-all ease-in-out",
            {
              "lg:w-0": minified,
              "lg:w-52": !minified,
            },
          )}
        >
          {children}
          <IconChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </span>
      </Button>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
SidebarSubTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const SidebarSubContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { minified } = useSidebar();
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        {
          "max-w-64": !minified,
          "max-w-0": minified,
        },
      )}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

SidebarSubContent.displayName = AccordionPrimitive.Content.displayName;

interface SidebarSubLinkProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
}
const SidebarSubLink = ({ href, children, isActive }: SidebarSubLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "ml-7 block rounded-r border-l-[1.5px] py-1 pl-5 text-sm hover:text-primary",
        {
          "border-primary bg-muted text-primary": isActive,
          "text-muted-foreground": !isActive,
        },
      )}
    >
      {children}
    </Link>
  );
};
SidebarSubLink.displayName = "SidebarSubLink";
