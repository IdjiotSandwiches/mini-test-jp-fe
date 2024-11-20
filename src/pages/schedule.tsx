import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { TimeInput } from "@nextui-org/date-input";

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <div className="">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <TimeInput label="Start Time" />
        <TimeInput label="End Time" />
      </div>
    </>
  );
}
