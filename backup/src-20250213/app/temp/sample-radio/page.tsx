"use client";

import { ChangeEvent, useState } from "react";
import { AUTH_LIST } from "@constants/auth";
import { Radio } from "@components/form";

export default function SampleRadio() {
  const [radioValue, setRadioValue] = useState("institution");

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setRadioValue(event.target.value);
  };

  return (
    <>
      <ul>
        {AUTH_LIST.map((auth) => {
          const { id, name, value, labelText, defaultChecked, disabled } = auth;

          return (
            <li key={id}>
              <Radio
                name={name}
                value={value}
                labelText={labelText}
                checked={radioValue === value}
                // defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={handleRadio}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
