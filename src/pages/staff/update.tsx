import React from "react";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Button } from "@/components/ui/button";
import { formatDate, formatTime } from "@/functions/formatDateTime";

export default function UpdatePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = React.useState<Date | undefined>(
    new Date(0, 0, 0, 0, 0, 0, 0)
  );
  const [endTime, setEndTime] = React.useState<Date | undefined>(
    new Date(0, 0, 0, 0, 0, 0, 0)
  );

  const data = { date, startTime, endTime };
  const state = { setDate, setStartTime, setEndTime };

  return (
    <>
      <div className="flex gap-10 w-full">
        <DateTimePicker data={data} state={state} />
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-bold text-3xl">Idjiot Sandwiches</h3>
            <h4 className="text-xl">2118033615</h4>
          </div>
          <div>
            <h4 className="font-bold text-xl">Updated Date:</h4>
            <h5 className="text-lg">{formatDate(date)}</h5>
          </div>
          <div>
            <h4 className="font-bold text-xl">Updated Time:</h4>
            <h5 className="text-lg">{formatTime(startTime)} - {formatTime(endTime)}</h5>
          </div>
          <div>
            <Button className="bg-orange-400">UPDATE</Button>
          </div>
        </div>
      </div>
    </>
  );
}
