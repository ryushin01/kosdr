"use client";

import { TextButton } from "@/components/button";
import {
  Input,
  Label,
  Form,
  InputField,
  InputMessage,
  SearchInput,
} from "@/components/form";
import { ChangeEvent, useState } from "react";

export default function FormComponent() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);

  const handleSubmit = () => {
    console.log("value", value);
    console.log("value2", value2);
    setValue("");
    setValue2("");
  };

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    console.log(e.target.value);
  };

  // const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   // setValue2(e.target.value);
  //   setIsFocus(false);
  // };
  // const handleBlur2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log(e.target.value);
  //   // setValue(e.target.value);
  //   setIsFocus2(false);
  // };
  // const handleBlur3 = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   // setValue(e.target.value);
  //   setIsFocus3(false);
  // };

  const handleClick = () => {
    console.log("검색버튼 클릭");
  };

  return (
    <main>
      <Form
        onSubmit={handleSubmit}
        legendText="인풋테스트"
        isHiddenLegend={false}
        onChange={(e) => handleChange(e)}
      >
        <div>1</div>
        <Label>
          <Input
            name="test1"
            shape="xl"
            isError={false}
            isFocus={isFocus2}
            onFocus={() => setIsFocus2(true)}
            onChange={(e) => setValue2(e.target.value)}
            // onBlur={handleBlur2}
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
          // onBlur={handleBlur}
          placeholder="텍스트 입력"
          name="test2"
          inputMessage="최소 한 글자 이상 작성해 주세요"
          value={value}
        />
        {/* <button type="submit">클릭</button> */}

        <div>3</div>
        <SearchInput
          name="test1"
          shape="xl"
          isFocus={isFocus2}
          onFocus={() => setIsFocus2(true)}
          onChange={(e) => setValue2(e.target.value)}
          onClick={handleClick}
          // onBlur={handleBlur2}
          value={value2}
        />

        <div>4</div>
        <TextButton
          shape="solid"
          size="large"
          // disabled={true}
          onClick={handleClick}
          color="primary"
        >
          텍스트 버튼
        </TextButton>

        <div>5</div>
        <InputField
          htmlFor=""
          type="password"
          // labelText={"test2"}
          isError={false}
          isFocus={isFocus3}
          required={false}
          disabled={false}
          onFocus={() => setIsFocus3(true)}
          onChange={(e) => setValue3(e.target.value)}
          // onBlur={handleBlur3}
          placeholder="텍스트 입력"
          name="test3"
          // inputMessage="최소 한 글자 이상 작성해 주세요"
          value={value3}
        />
      </Form>
    </main>
  );
}
