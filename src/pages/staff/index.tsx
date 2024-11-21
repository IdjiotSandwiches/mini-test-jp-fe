import React from "react";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@nextui-org/react";
import { formatDate, formatTime } from "@/functions/formatDateTime";
import { scheduleServiceApi } from "@/functions/apiClient";
import { IDateTimePickerDataProps } from "@/interfaces/DateTimePicker";
import { format } from "date-fns";

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = React.useState<Date>(
    new Date(0, 0, 0, 0, 0, 0, 0)
  );
  const [endTime, setEndTime] = React.useState<Date>(
    new Date(0, 0, 0, 0, 0, 0, 0)
  );
  const [schedules, setSchedules] = React.useState<
    Array<IDateTimePickerDataProps>
  >([]);

  const data = { date, startTime, endTime };
  const state = { setDate, setStartTime, setEndTime };

  const fetchSchedules = async () => {
    try {
      let formattedDate = format(date ?? new Date(), "yyyy-MM-dd");
      let formattedStartTime = format(startTime, "HH:mm:ss");
      let formattedEndTime = format(endTime, "HH:mm:ss");
      const schedules = await scheduleServiceApi.get(
        `/api/schedule/${formattedDate}/${formattedStartTime}/${formattedEndTime}`
      );
      setSchedules(schedules.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex gap-10 w-full">
        <div className="grid gap-4">
          <DateTimePicker data={data} state={state} />
          <Button onClick={fetchSchedules}>FILTER</Button>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div>
            <h2 className="text-3xl font-bold">{formatDate(date)}</h2>
            <h5 className="text-lg font-medium">
              {formatTime(startTime)} - {formatTime(endTime)}
            </h5>
          </div>
          <div>
            <Button className="bg-sky-500">INSERT</Button>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Nama</TableHead>
                  <TableHead>NIM</TableHead>
                  <TableHead>Tanggal Sidang</TableHead>
                  <TableHead className="">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((schedule, idx) => {
                  return (
                    <>
                      <TableRow key={idx}>
                        <TableCell className="font-medium">
                          Idjiot Sandwiches
                        </TableCell>
                        <TableCell>2118033615</TableCell>
                        <TableCell>
                          {formatDate(new Date(schedule.date ?? ''))}
                        </TableCell>
                        <TableCell className="flex items-center gap-2">
                          <Button className="bg-lime-500">VIEW</Button>
                          <Button className="bg-orange-400">
                            <Link href="/update" className="text-white">UPDATE</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
