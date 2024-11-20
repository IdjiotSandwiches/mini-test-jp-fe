import React from "react";
import { TimeInputProps } from "@/interfaces/DateTimePicker";

const TimeInput: React.FC<TimeInputProps> = ({ label, name, setTime }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    if(time) {
      const [hours, minutes] = time.split(':').map(Number);
      const timeObject  = new Date();
      timeObject.setHours(hours, minutes, 0, 0);

      setTime(timeObject);
    }
  };

  return (
    <>
      <div className="grid">
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
        <input
          type="time"
          name={name}
          className="rounded-md border-gray-300/60"
          onChange={onChange}
        />
      </div>
    </>
  );
};

TimeInput.displayName = "TimeInput";

export { TimeInput };
