"use client";

import { useState } from "react";
import { INTERESTS_LIST } from "./data/data";
import { ButtonGroup } from "@components/button";

export default function SampleButtonGroup() {
  const [isCategorySelect, setIsCategorySelect] = useState<boolean>(false);

  const handleButton = (index: number) => {
    const newArray: any[] = Array(INTERESTS_LIST.length).fill(false);
    newArray[index] = true;
    setIsCategorySelect(newArray);
  };

  console.log(isCategorySelect);

  return (
    <>
      <ButtonGroup
        size="small"
        data={INTERESTS_LIST}
        handleButton={handleButton}
        // isSelected={isCategorySelect[index]}
      />
    </>
  );
}
