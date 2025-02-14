"use client";

import { ChangeEvent, useState } from "react";
import { AUTH_LIST } from "@constants/auth";
import { Radio } from "@components/form";

export default function SampleRadio() {
  const [radioValue, setRadioValue] = useState("institution");

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  console.log("지금 선택된 라디오 값: ", radioValue);

  return (
    <>
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
