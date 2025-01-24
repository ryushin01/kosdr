"use client";

import { ChangeEvent } from "react";

type InputProps = {
  id?: string;
  type?: "text" | "password" | "search" | "tel";
  shape?: "lg" | "xl";
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isError?: boolean;
  name: string;
  //   color: "neutral" | "primary" | "secondary";
};

/**
 * Input props
 * @property {string} id           - 인풋 id를 정의합니다.
 * @property {string} type         - 인풋 타입을 정의합니다.
 * @property {string} shape        - 인풋의 쉐입을 정의합니다.
 * @property {boolean} required    - 인풋의 필수 여부를 정의합니다.
 * @property {boolean} disabled    - 인풋의 비활성화 상태를 정의합니다.
 * @property {function} onChange   - 인풋 작성시 실행할 함수를 위해 미리 정의합니다.
 * @property {string} placeholder  - 인풋의 힌트 텍스트를 정의합니다.
 * @property {boolean} isError     - 인풋의 에러 상태를 정의합니다.
 * @property {string} name         - 인풋의 이름을 정의합니다.
 */

export default function Input({
  id,
  type = "tel",
  shape = "lg",
  required = false,
  disabled,
  onChange,
  placeholder = "입력해주세요.",
  name,
  isError,
  ...props
}: InputProps) {
  const className = `_textInput ${
    shape === "lg" ? "rounded-lg" : "rounded-xl"
  } ${isError ? "border-koser-secondary-red-50" : "border-koser-grayscale-80"}`;
  return (
    <input
      type={type}
      id={id}
      required={required}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      name={name}
      {...props}
    />
  );
}
