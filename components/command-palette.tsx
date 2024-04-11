"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { IconCategory, IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  minified?: boolean;
}
export default function CommandPalette(props: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => setOpen(true)}
        className={cn(
          "rounded-md border px-4 py-2 text-sm text-muted-foreground",
          props.className,
        )}
      >
        <IconSearch size={16} className="inline" />
        <span
          className={cn("mx-4", {
            hidden: props.minified,
          })}
        >
          Search...
        </span>
        <kbd
          className={cn(
            "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
            {
              hidden: props.minified,
            },
          )}
        >
          <span className="text-xs">⌘</span>J
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search something" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <IconCategory className="mr-2 h-4 w-4" />
              <span>Dashboarsd</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
