"use client";

import { IconCheese, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const renderToggleButton = () => {
    switch (theme) {
      case "light":
        return (
          <Button variant="ghost" size="icon" onClick={() => setTheme("dark")}>
            <IconSun />
          </Button>
        );

      case "dark":
        return (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme("system")}
          >
            <IconMoon />
          </Button>
        );

      default:
        return (
          <Button variant="ghost" size="icon" onClick={() => setTheme("light")}>
            <IconCheese />
          </Button>
        );
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{renderToggleButton()}</TooltipTrigger>
        <TooltipContent>
          <p>
            {theme === "light"
              ? "Light mode"
              : theme === "dark"
                ? "Dark mode"
                : "System"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
