import type { Metadata } from "next";

import CalendarClientPage from "./_client";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Preview of the calendar component",
};

export default function CalendarPage() {
  return <CalendarClientPage />;
}
