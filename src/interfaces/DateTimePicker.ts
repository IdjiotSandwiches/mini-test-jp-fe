export interface IDateTimePickerStateProps {
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setStartTime: React.Dispatch<React.SetStateAction<Date>>;
  setEndTime: React.Dispatch<React.SetStateAction<Date>>;
}

export interface IDateTimePickerDataProps {
  date: Date | undefined;
  startTime: Date;
  endTime: Date;
}

export interface IDateTimePickerProps {
  data: IDateTimePickerDataProps;
  state: IDateTimePickerStateProps;
}

export interface ITimeInputProps {
  label: string;
  name: string;
  setTime: React.Dispatch<React.SetStateAction<Date>>;
}
