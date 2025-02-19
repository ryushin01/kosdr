import { useCallback, useState } from "react";

/**
 * @name useCheckBox
 * @version 1.0.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 * @description 부모 컴포넌트가 클라이언트 컴포넌트이어야 합니다.
 */

export default function useCheckBox(): [string[], (checkbox: string, checked: boolean) => void] {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) =>
  //   setIsChecked(event.target.checked);

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

  return [checkedList, handleCheckbox];
}
