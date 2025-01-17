import Image from "next/image";
import { CalendarIcon } from "@icons";
import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type DatePickerProps = {
  startDate: Date | null;
  handleDatePicker: (date: Date | null) => void;
};

export default function DataPicker({
                                     startDate, handleDatePicker,
                                   }: DatePickerProps) {
  return (
    <>
      <label htmlFor="datePicker" className="_datepicker">
        <ReactDatePicker
          id="datePicker"
          locale={ko}
          dateFormat="yyyy.MM.dd"
          dateFormatCalendar="yyyy년 MM월"
          selected={startDate}
          showPopperArrow={false}
          popperPlacement="bottom-start"
          onChange={handleDatePicker}
          placeholderText="날짜 선택"
        />

        <Image
          src={CalendarIcon}
          alt="달력 아이콘"
        />
      </label>
    </>
  );
}
