import { ChangeEvent, useState } from "react";

/**
 * @name useRadio
 * @version 1.0.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 * @property {string} initValue   - 초기 선택값
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useRadio(initValue: any) {
  const [radioValue, setRadioValue] = useState(initValue);

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) =>
    setRadioValue(event.target.value);

  return [radioValue, handleRadio];
}
