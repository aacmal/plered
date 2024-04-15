import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ISODateString(date: Date | undefined) {
  if (!date) return undefined;
  return `${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(
    2,
    "0",
  )}-${`${date.getDate()}`.padStart(2, "0")}T${`${date.getHours()}`.padStart(
    2,
    "0",
  )}:${`${date.getMinutes()}`.padStart(2, "0")}`;
}
