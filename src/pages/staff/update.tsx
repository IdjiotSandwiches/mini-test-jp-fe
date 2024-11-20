import React from "react";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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
        <div className="flex gap-10 w-full">
          <DateTimePicker data={data} state={state} />
          <div className="flex flex-col gap-4 w-full">
				<div>
					<label className="font-medium text-lg">Eligible Students</label>
					<Select>
					<SelectTrigger className="w-1/2">
						<SelectValue placeholder="Select student" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="idjiot_sandwiches">
							Idjiot Sandwiches
						</SelectItem>
					</SelectContent>
					</Select>
				</div>
            <div>
              <h2 className="text-3xl font-bold">Date Chosen:</h2>
              <p className="text-xl">{formatDate(date)}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Time Chosen:</h2>
              <p className="text-xl">
                {formatTime(startTime)} - {formatTime(endTime)}
              </p>
            </div>
				<div>
					<Button className="bg-sky-500">INSERT</Button>
				</div>
          </div>
        </div>
      </div>
    </>
  );
}
