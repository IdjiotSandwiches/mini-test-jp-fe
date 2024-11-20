import React from "react";
import { DateTimePicker } from "@/components/ui/datetime-picker";

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = React.useState<Date | undefined>(new Date(0,0,0,0,0,0,0));
  const [endTime, setEndTime] = React.useState<Date | undefined>(new Date(0,0,0,0,0,0,0));

  const data = { date, startTime, endTime };
  const state = { setDate, setStartTime, setEndTime };

  const formatDate = (date?: Date) => {
    const formattedDate = new Intl.DateTimeFormat("en-ID", {
      dateStyle: "full",
    }).format(date);

    return formattedDate;
  };

  const formatTime = (time?: Date) => {
    const formattedTime = new Intl.DateTimeFormat("en-ID", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(time);

    return formattedTime;
  };

  return (
    <>
      <div className="min-h-screen max-w-screen-lg mx-auto flex items-center">
        <div className="flex gap-10">
          <DateTimePicker data={data} state={state} />
          <div>
            <h2 className="text-3xl font-bold">{formatDate(date)}</h2>
            <h5>{formatTime(startTime)} - {formatTime(endTime)}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
