"use client";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState } from "react";
import {
  Calendar as ReactBigCalendar,
  Views,
  dateFnsLocalizer,
} from "react-big-calendar";

import "./scss/styles.scss";

// import "./custom.style.scss";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof ReactBigCalendar>,
  "localizer"
>;

export default function Calendar(props: Props) {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  return (
    <ReactBigCalendar
      localizer={localizer}
      views={[Views.MONTH, Views.WEEK, Views.DAY]}
      defaultView={Views.WEEK}
      view={view} // Include the view prop
      date={date} // Include the date prop
      // @ts-expect-error This prop is not available in the original component
      onView={(view) => setView(view)}
      onNavigate={(date) => {
        setDate(new Date(date));
      }}
      {...props}
    />
  );
}
