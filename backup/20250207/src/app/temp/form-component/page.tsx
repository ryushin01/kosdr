"use client";

import {
  Input,
  Label,
  Form,
  InputField,
  InputMessage,
} from "@/components/form";
import { useState } from "react";

export default function FormComponent() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const handleSubmit = () => {
    console.log("value", value);
    console.log("value2", value2);
    setValue("");
    setValue2("");
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    // setValue2(e.target.value);
    setIsFocus(false);
  };
  const handleBlur2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    // setValue(e.target.value);
    setIsFocus2(false);
  };
  return (
    <main>
      <Form onSubmit={handleSubmit} legendText="인풋테스트" isHidden={false}>
        <div>1</div>
        <Label>
          <Input
            name="test1"
            shape="xl"
            isError={false}
            isFocus={isFocus2}
            onFocus={() => setIsFocus2(true)}
            onChange={(e) => setValue2(e.target.value)}
            onBlur={handleBlur2}
            value={value2}
          />
        </Label>
        {isFocus2 && (
          <InputMessage isError={false} isFocus={isFocus2}>
            최소 한 글자 이상 작성해 주세요
          </InputMessage>
        )}

        <div>2</div>
        <InputField
          htmlFor=""
          // labelText={"test2"}
          isError={false}
          isFocus={isFocus}
          required={false}
          disabled={false}
          onFocus={() => setIsFocus(true)}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          placeholder="텍스트 입력"
          name="test2"
          inputMessage="최소 한 글자 이상 작성해 주세요"
          value={value}
        />
        <button type="submit">클릭</button>
      </Form>
    </main>
  );
}
