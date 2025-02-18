"use client";

import { useCallback, useState } from "react";
import { AUTH_LIST } from "@constants/auth";
import { INTERESTS_LIST } from "./data/data";
import { Checkbox, Radio } from "@components/form";
import { useRadio } from "@hooks";

export default function SampleCheckboxAndRadio() {
  // Radio 컴포넌트 사용 시 useRadio 커스텀 훅을 사용하고, 초기값을 설정합니다.
  const [radioValue, handleRadio] = useRadio("institution");

  const [checkedList, setCheckedList] = useState<Array<string>>([]);

  const handleCheckbox = useCallback(
    (checkbox: string, checked: boolean) => {
      if (checked) {
        setCheckedList((prev) => [...prev, checkbox]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((element) => element !== checkbox));
      }
    },
    [checkedList],
  );

  // console.log("지금 선택된 체크박스 값: ", checkedList);
  console.log("지금 선택된 라디오 값: ", radioValue);

  return (
    <>
      {/* Checkbox component */}
      {INTERESTS_LIST.map((interest) => {
        const { id, name, labelText, disabled } = interest;

        return (
          <div key={id}>
            <Checkbox
              name={name}
              labelText={labelText}
              checked={checkedList.includes(name)}
              disabled={disabled}
              onChange={(event) => {
                handleCheckbox(event.target.name, event.target.checked);
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
