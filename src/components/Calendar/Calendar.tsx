// components/Calendar.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (value: any) => {
    setDate(value);
  };

  return (
    <div className="p-4">
      <div className="w-[500px] h-[380px]">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default MyCalendar;
