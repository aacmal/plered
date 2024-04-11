"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        className="dark:hidden"
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
      >
        <IconSun />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className="hidden dark:inline-flex"
      >
        <IconMoon />
      </Button>
    </>
  );
}
