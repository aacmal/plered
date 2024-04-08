"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { IconCalendar, IconSearch } from "@tabler/icons-react";
import { addDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Filter() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  return (
    <div className="flex flex-col-reverse justify-between gap-3 md:flex-row">
      <div className="flex w-full items-center gap-2 md:max-w-xs">
        <IconSearch className="text-muted-foreground" />
        <Input placeholder="Search orders" />
      </div>
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "w-full justify-start bg-card text-left font-normal shadow-sm lg:w-fit",
                !date && "text-muted-foreground",
              )}
            >
              <IconCalendar className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
