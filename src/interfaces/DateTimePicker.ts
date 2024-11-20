export interface DateTimePickerStateProps {
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setStartTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export interface DateTimePickerDataProps {
  date: Date | undefined;
  startTime: Date | undefined;
  endTime: Date | undefined;
}

export interface DateTimePickerProps {
  data: DateTimePickerDataProps;
  state: DateTimePickerStateProps;
}

export interface TimeInputProps {
  label: string;
  name: string;
  setTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
