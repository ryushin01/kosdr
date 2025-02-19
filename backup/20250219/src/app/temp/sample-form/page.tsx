"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { IconButton, TextButton } from "@components/button";
import {
  Input,
  Label,
  Form,
  InputField,
  InputMessage,
  SearchInput,
} from "@components/form";
import { arrowRightIcon } from "@icons";

export default function FormComponent() {
  // NOTE: 1. form 안의 값들을 객체로 묶어서 저장하기 위해 각 input의 name 기준으로 key를 할당합니다.
  const [formValues, setFormValues] = useState({
    test1: "",
    test2: "",
    test3: "",
    test4: "",
  });

  // NOTE: 2. input 값 변화를 감지하기 위한 함수를 생성합니다.
  const typingMonitor = (e: ChangeEvent<HTMLFormElement>) => {
    // NOTE: 3. 각 input의 name과 value를 구조 분해 할당합니다.
    const { name, value } = e.target;

    // NOTE: 4. 각 input의 name(key)과 value를 매핑합니다.
    // NOTE: 5. 기존 객체를 스프레드 오퍼레이토로 복제하여 SetStateAction에 넣습니다. 이로써 각 input의 value가 변하면 실시간으로 리렌더링할 수 있습니다.
    setFormValues({ ...formValues, [name]: value });
  };

  // NOTE: 6. 콘솔 출력 시 객체 안에 각 name에 value가 찍히는 것이 확인됩니다.
  // console.log(formValues);

  // NOTE: 10. 마지막으로 Form의 모든 input 값을 DTO 형태로 묶어서 서버로 보냅니다.
  const handleSubmit = () => {
    console.log("formValues", formValues);
  };

  // const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
  //   console.log(e.target.value);
  // };

  // const handleClick = () => {
  //   console.log("검색버튼 클릭");
  // };
  const handleClick2 = () => {
    console.log("텍스트버튼 클릭");
    handleSubmit();
  };

  return (
    <main>
      <Form
        onSubmit={handleSubmit}
        legendText="인풋테스트"
        isHiddenLegend={false}
        // NOTE: 7. Form에 onChange 이벤트를 걸고, 모든 input의 값들을 제어합니다.
        onChange={typingMonitor}
      >
        <div>1</div>
        <Label>
          <Input
            name="test1"
            // NOTE: 8. input의 value는 onChange가 있어야 됩니다. 그렇기 때문에 여기서 에러가 발생합니다. 따라서 input의 value를 유동적으로 변경해야 하는 경우는 value 대신 defaultValue로 바꿔서 사용합니다.
            // NOTE: 9. value의 값을 아래와 같이 지정해야 합니다.
            defaultValue={formValues.test1}
            shape="xl"
            isError={false}
          />
          {
            <InputMessage isError={false}>
              최소 한 글자 이상 작성해 주세요
            </InputMessage>
          }
        </Label>

        <div>2</div>
        <InputField
          name="test2"
          defaultValue={formValues.test2}
          htmlFor=""
          // labelText={"test2"}
          // isError={true}
          required={false}
          disabled={false}
          // onBlur={handleBlur}
          placeholder="텍스트 입력"
          inputMessage="최소 한 글자 이상 작성해 주세요"
        />

        <div>3</div>
        <SearchInput
          name="test3"
          defaultValue={formValues.test3}
          shape="xl"
          // onBlur={() => setIsFocus2(false)}
        />

        <div>4</div>
        <TextButton
          shape="solid"
          size="large"
          // disabled={true}
          onClick={handleClick2}
          color="primary"
        >
          텍스트 버튼
        </TextButton>

        <div>5</div>
        <InputField
          name="test4"
          defaultValue={formValues.test4}
          htmlFor=""
          type="password"
          isError={false}
          required={false}
          disabled={false}
          placeholder="텍스트 입력"
          inputMessage="최소 한 글자 이상 작성해 주세요"
        />

        <div>6</div>
        <IconButton
          shape="none"
          size="xsmall"
          // disabled={true}
          // onClick={handleClick}
          color="primary"
          icon={
            <Image
              src={arrowRightIcon.src}
              alt="arrow icon"
              width={24}
              height={24}
            />
          }
          iconPosition="right"
        >
          더보기
        </IconButton>
      </Form>
    </main>
  );
}
