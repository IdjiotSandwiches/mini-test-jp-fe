import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { TimeInput } from "@/components/ui/time-input";
import { IDateTimePickerProps } from "@/interfaces/DateTimePicker";
import { formatTime } from "@/functions/formatDateTime";

const DateTimePicker: React.FC<IDateTimePickerProps> = ({ data, state }) => {
  return (
    <>
      <div className="grid gap-4 w-min">
        <Calendar
          mode="single"
          selected={data.date}
          onSelect={state.setDate}
          className="rounded-md border"
        />
        <TimeInput
          label="Start Time"
          name="start_time"
          time={formatTime(data.startTime)}
          setTime={state.setStartTime}
        />
        <TimeInput
          label="End Time"
          name="end_time"
          time={formatTime(data.endTime)}
          setTime={state.setEndTime}
        />
      </div>
    </>
  );
};

DateTimePicker.displayName = "DateTimePicker";

export { DateTimePicker };
