export interface IScheduleProps {
  id: Number;
  name: string;
  nim: string;
  date: Date;
  startTime: Date;
  endTime: Date;
}

export interface IUpdateScheduleProps {
  date: Date;
  startTime: Date;
  endTime: Date;
}
