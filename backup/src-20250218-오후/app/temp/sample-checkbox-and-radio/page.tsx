"use client";

import { ChangeEvent, useCallback, useState } from "react";
import { AUTH_LIST } from "@constants/auth";
import { SAMPLE_DATA_LIST } from "./data/data";
import { Checkbox, Radio } from "@components/form";

export default function SampleCheckboxAndRadio() {
  const [radioValue, setRadioValue] = useState("institution");
  const [checkedList, setCheckedList] = useState<Array<string>>([]);

  const handleCheckbox = useCallback(
    (checked: boolean, item: string) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList],
  );

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  console.log("지금 선택된 체크박스 값: ", checkedList);
  // console.log("지금 선택된 라디오 값: ", radioValue);

  return (
    <>
      {/* Checkbox component */}
      {SAMPLE_DATA_LIST.map((sample) => {
        const { id, name, labelText, disabled } = sample;

        return (
          <div key={id}>
            <Checkbox
              name={name}
              labelText={labelText}
              checked={checkedList.includes(name)}
              disabled={disabled}
              onChange={(event) => {
                handleCheckbox(event.target.checked, event.target.name);
              }}
            />
          </div>
        );
      })}

      {/* Radio component */}
      {AUTH_LIST.map((auth) => {
        const { id, name, value, labelText, disabled } = auth;

        return (
          <div key={id}>
            <Radio
              name={name}
              value={value}
              labelText={labelText}
              checked={radioValue === value}
              disabled={disabled}
              onChange={handleRadio}
            />
          </div>
        );
      })}
    </>
  );
}
