import React from "react";
import { DateTimePicker } from "@/components/ui/datetime-picker";

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = React.useState<Date | undefined>(undefined);
  const [endTime, setEndTime] = React.useState<Date | undefined>(undefined);

  const data = { date, startTime, endTime };
  const state = { setDate, setStartTime, setEndTime };

  return (
    <>
		<div className="">
        <DateTimePicker data={data} state={state} />
      </div>
    </>
  );
}
