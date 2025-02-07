import { useState } from "react";

export default function useDatePicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDatesPicker = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleDatePicker = (date: Date | null) => {
    setStartDate(date);
  };

  const reset = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return { startDate, endDate, handleDatePicker, handleDatesPicker, reset };
}
