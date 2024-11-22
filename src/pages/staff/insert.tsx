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
import { formatDate, formatTime } from "@/functions/formatDateTime";
import { Link } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";
import { scheduleServiceApi } from "@/functions/apiClient";
import { IUserProps } from "@/interfaces/Users";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function InsertPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = React.useState<Date>(
    new Date(0, 0, 0, 0, 0, 0, 0)
  );
  const [endTime, setEndTime] = React.useState<Date>(
    new Date(0, 0, 0, 0, 0, 0, 0)
  );

  const data = { date, startTime, endTime };
  const state = { setDate, setStartTime, setEndTime };

  const [userData, setUserData] = React.useState<IUserProps[]>([]);
  const [student, setStudent] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const eligibleUsers = await scheduleServiceApi.get(
          `/api/schedule/eligible-students`
        );
        setUserData(eligibleUsers.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  const handleInsertData = async () => {
    if (
      startTime.getTime() > endTime.getTime() ||
      endTime.getTime() < startTime.getTime() ||
      startTime.getTime() === endTime.getTime()
    ) {
      setErrorMsg("Please use appropriate time!");
      return;
    }

    if (date !== undefined) {
      const insertSchedule = {
        date: format(date ?? new Date(), "yyyy-MM-dd").toString(),
        startTime: formatTime(startTime),
        endTime: formatTime(endTime),
        studentId: student,
      };

      try {
        await scheduleServiceApi.post(`/api/schedule/insert-schedule`, insertSchedule);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex gap-10 w-full">
        <DateTimePicker data={data} state={state} />
        <div className="flex flex-col gap-4 w-full">
          <Link href={"/"}>
            <Button className="pl-2">
              <ChevronLeft /> Back
            </Button>
          </Link>
          <div>
            <label className="font-medium text-lg">Eligible Students</label>
            <Select onValueChange={(value) => setStudent(value)}>
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Select student" />
              </SelectTrigger>
              {userData ? (
                userData.map((user) => {
                  return (
                    <>
                      <SelectContent>
                        <SelectItem value={user.id}>{user.name}</SelectItem>
                      </SelectContent>
                    </>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </Select>
          </div>
          <div>
            <p className="text-red-500 text-sm">{errorMsg}</p>
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
            <Button className="bg-sky-500" onClick={handleInsertData}>
              INSERT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
