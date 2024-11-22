// import { IDateTimePickerDataProps } from "@/interfaces/DateTimePicker";

export interface IScheduleProps {
  name: string;
  nim: string;
  date: Date | undefined;
  startTime: Date;
  endTime: Date;
}
