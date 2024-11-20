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
import { Link } from "react-router-dom";
import { formatDate, formatTime } from "@/functions/formatDateTime";

export default function SchedulePage() {
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
      <DateTimePicker data={data} state={state} />
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
              <TableRow>
                <TableCell className="font-medium">Idjiot Sandwiches</TableCell>
                <TableCell>2118033615</TableCell>
                <TableCell>{formatDate(date)}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button className="bg-lime-500">VIEW</Button>
                  <Button className="bg-orange-400">
                    <Link to={"/update"}>UPDATE</Link>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
