export interface IScheduleProps {
  id: Number;
  name: string;
  nim: string;
  date: Date;
  startTime: Date;
  endTime: Date;
}

export interface IUpdateScheduleProps {
  id: Number;
  date: Date;
  startTime: Date;
  endTime: Date;
}
