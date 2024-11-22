import React from "react";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Button } from "@/components/ui/button";
import { formatDate, formatTime } from "@/functions/formatDateTime";
import { useParams } from "react-router-dom";
import { scheduleServiceApi } from "@/functions/apiClient";
import { IUpdateScheduleProps } from "@/interfaces/Schedule";

export default function UpdatePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = React.useState<Date>(
    new Date(0, 0, 0, 0, 0, 0, 0)
  );
  const [endTime, setEndTime] = React.useState<Date>(
    new Date(0, 0, 0, 0, 0, 0, 0)
  );

  const data = { date, startTime, endTime };
  const state = { setDate, setStartTime, setEndTime };

  const { id } = useParams();
  const [updatedData, setUpdatedData] = React.useState<IUpdateScheduleProps>();
  const [errorMsg, setErrorMsg] = React.useState('');

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const schedule = await scheduleServiceApi.get(`/api/schedule/${id}`);
        const scheduleData = schedule.data;
        setDate(new Date(scheduleData.date));
        setStartTime(new Date(`${scheduleData.date} ${scheduleData.startTime}`));
        setEndTime(new Date(`${scheduleData.date} ${scheduleData.endTime}`));
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }), [id];

  const handleUpdateData = async () => {
    if(startTime > endTime || endTime < startTime) {
      setErrorMsg('Please use appropriate time!');
      return;
    }

    if (date !== undefined) {
      setUpdatedData({
        date: date,
        startTime: startTime,
        endTime: endTime,
      });
    }
  }

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
            <p className="mt-4 text-sm text-gray-500">
              Use DateTime picker beside to choose date & time.
            </p>
            <h4 className="font-bold text-xl">Updated Date:</h4>
            <h5 className="text-lg">{formatDate(date)}</h5>
          </div>
          <div>
            <h4 className="font-bold text-xl">Updated Time:</h4>
            <h5 className="text-lg">
              {formatTime(startTime)} - {formatTime(endTime)}
            </h5>
          </div>
          <div>
            <Button className="bg-orange-400" onClick={handleUpdateData}>UPDATE</Button>
          </div>
        </div>
      </div>
    </>
  );
}
