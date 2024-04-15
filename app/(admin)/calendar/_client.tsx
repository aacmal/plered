"use client";

import Calendar from "@/components/calendar/calendar";
import type { OnSubmitCreateEventProps } from "@/components/calendar/create-event-dialog";
import CreateEventDialog from "@/components/calendar/create-event-dialog";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Wrapper from "@/components/wrapper";
import { useState } from "react";

import { events } from "./_events";

export default function CalendarClientPage() {
  const [myEvents, setMyEvents] = useState(events);
  const [createEventState, setCreateEventState] = useState<{
    open: boolean;
    from?: Date;
    to?: Date;
  }>({ open: false });

  const handleCreateEvent = (data: OnSubmitCreateEventProps) => {
    setMyEvents((prev) => [
      ...prev,
      {
        id: Math.random(),
        title: data.title,
        start: data.from,
        end: data.to,
      },
    ]);
    setCreateEventState({ open: false });
  };

  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    setCreateEventState({
      open: true,
      from: slotInfo.start,
      to: slotInfo.end,
    });
  };

  return (
    <>
      <Wrapper
        width="max"
        className="items-strech flex h-full flex-col justify-stretch gap-2"
      >
        <div className="flex justify-between">
          <p>Select date or click Create Event button to create new event</p>
          <Button
            onClick={() =>
              setCreateEventState({
                open: true,
              })
            }
          >
            Create Event
          </Button>
        </div>
        <Card className="flex-1 xl:p-8">
          <Calendar
            events={myEvents}
            selectable
            dayLayoutAlgorithm="no-overlap"
            onSelectSlot={handleSelectSlot}
          />
        </Card>
      </Wrapper>
      <CreateEventDialog
        {...createEventState}
        onSubmit={handleCreateEvent}
        onOpenChange={(state) => {
          setCreateEventState({ open: state });
        }}
      />
    </>
  );
}
