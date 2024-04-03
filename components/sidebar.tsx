"use client";

import { useSidebar } from "@/context/sidebar-ctx";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  IconCategory,
  IconCategoryFilled,
  IconChevronDown,
  IconDashboard,
  IconLock,
  IconLockFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";

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
        <AccordionPrimitive.Root
          type="single"
          collapsible
          className="flex flex-col gap-2"
        >
          <SidebarLink
            isActive={pathname === "/"}
            icon={<IconCategory size={20} />}
            href="/"
            minified={minified}
          >
            Dashboard
          </SidebarLink>
          <SidebarSub value="authentication">
            <SidebarSubTrigger icon={<IconLock />}>
              Authentication
            </SidebarSubTrigger>
            <SidebarSubContent>
              <SidebarSubLink
                isActive={pathname === "/auth/login/"}
                href="/auth/login"
              >
                Login
              </SidebarSubLink>
              <SidebarSubLink
                isActive={pathname === "/auth/register/"}
                href="/auth/register"
              >
                Register
              </SidebarSubLink>
              <SidebarSubLink
                isActive={pathname === "/auth/forgot-password/"}
                href="/auth/forgot-password"
              >
                Forgot Password
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
      variant={props.isActive ? "secondary" : "ghost"}
      className={cn("h-auto w-full justify-center gap-2 py-3 transition-all", {
        "lg:gap-2": !props.minified,
        "lg:gap-0": props.minified,
      })}
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
  }
>(({ className, children, icon, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} asChild {...props}>
      <Button
        className="group h-auto w-full justify-center gap-2 py-3 transition-all"
        variant="ghost"
      >
        {icon}
        {children}
        <IconChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </Button>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
SidebarSubTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const SidebarSubContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

SidebarSubContent.displayName = AccordionPrimitive.Content.displayName;

interface SidebarSubLinkProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
}
const SidebarSubLink = ({ href, children, isActive }: SidebarSubLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "ml-7 block rounded-r-md border-l-2 py-1 pl-5 text-sm hover:bg-muted hover:text-primary",
        {
          "border-primary text-primary": isActive,
          "text-muted-foreground": !isActive,
        },
      )}
    >
      {children}
    </Link>
  );
};
SidebarSubLink.displayName = "SidebarSubLink";
