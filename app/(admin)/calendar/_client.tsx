"use client";

import Calendar from "@/components/calendar/calendar";
import Card from "@/components/ui/card";
import Wrapper from "@/components/wrapper";
import { useState } from "react";

import { events } from "./_events";

export default function CalendarClientPage() {
  const [myEvents] = useState(events);

  return (
    <Wrapper
      width="max"
      className="items-strech flex h-full flex-col justify-stretch"
    >
      <Card className="flex-1 xl:p-8">
        <Calendar
          events={myEvents}
          selectable
          dayLayoutAlgorithm="no-overlap"
        />
      </Card>
    </Wrapper>
  );
}
