"use client";

import { useEffect } from "react";
import { DatePicker } from "@components/common";
import { useDatePicker } from "@hooks";
import { getKoreaDate, stringToDate } from "@utils/dateUtil";

export default function SingleDatepicker() {
  const { ...datePickerProps } = useDatePicker();
  const today = getKoreaDate();
  
  useEffect(() => {
    datePickerProps.startDate = stringToDate(today);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datePickerProps]);

  return (
    <>
      <DatePicker {...datePickerProps} />
    </>
  );
}
