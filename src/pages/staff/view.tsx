import React from "react";
import { useParams } from "react-router-dom";
import { Image } from "lucide-react";
import { IScheduleProps } from "@/interfaces/Schedule";
import { scheduleServiceApi } from "@/functions/apiClient";
import { formatDate, formatTime } from "@/functions/formatDateTime";
import { Link } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ViewPage() {
  const { id } = useParams();
  const [data, setData] = React.useState<IScheduleProps>();

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const schedule = await scheduleServiceApi.get(`/api/schedule/${id}`);
        setData(schedule.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [id]);

  return (
    <>
      <div>
        <Link href={"/"}>
          <Button className="pl-2">
            <ChevronLeft /> Back
          </Button>
        </Link>
        <h2 className="font-bold text-4xl mb-4">Student Information</h2>
        <div className="flex gap-10 w-full">
          <div className="w-52 h-64 flex justify-center items-center bg-gray-400/30 rounded-md">
            <Image className="w-12 h-12 text-gray-400/60" />
          </div>
          {data ? (
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-bold text-3xl">{data.name}</h3>
                <h4 className="text-xl">{data.nim}</h4>
              </div>
              <div>
                <h4 className="font-bold text-xl">Date Chosen:</h4>
                <h5 className="text-lg">{formatDate(new Date(data.date))}</h5>
              </div>
              <div>
                <h4 className="font-bold text-xl">Time Chosen:</h4>
                <h5 className="text-lg">
                  {formatTime(new Date(`${data.date} ${data.startTime}`))} -{" "}
                  {formatTime(new Date(`${data.date} ${data.endTime}`))}
                </h5>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
