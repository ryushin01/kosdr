import { ChangeEvent } from "react";
import Label from "./Label";
import Input from "./Input";
import InputMessage from "./InputMessage";

type InputFieldProps = {
  htmlFor?: string;
  labelText?: string;
  isFocus?: boolean;
  isError?: boolean;
  type?: "text" | "password" | "search" | "tel";
  shape?: "lg" | "xl";
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
  value: string;
  inputMessage: string;
};

/**
 * InputField props
 * @property {string} htmlFor      - 인풋 id와 매치 시키는 라벨 속성을 정의합니다.
 * @property {string} labelText    - 라벨의 텍스트 내용을 정의합니다.
 * @property {boolean} isFocus     - 라벨의 포커스 여부를 정의합니다.
 * @property {boolean} isError     - 라벨과 인풋의 에러 상태를 정의합니다.
 * @property {string} type         - 인풋 타입을 정의합니다.
 * @property {string} shape        - 인풋의 쉐입을 정의합니다.
 * @property {boolean} required    - 라벨과 인풋의 필수 표시 여부를 정의합니다.
 * @property {boolean} disabled    - 인풋의 비활성화 상태를 정의합니다.
 * @property {function} onChange   - 인풋 작성시 실행할 함수를 위해 미리 정의합니다.
 * @property {function} onClick    - 인풋 클릭시 실행할 함수를 위해 미리 정의합니다.
 * @property {string} placeholder  - 인풋의 힌트 텍스트를 정의합니다.
 * @property {string} name         - 인풋의 이름을 정의합니다.
 * @property {string} inputMessage - 포커스 또는 에러시 인풋 하단 텍스트 내용을 정의합니다.
 */

export default function InputField({
  htmlFor,
  labelText,
  isFocus,
  isError,
  type,
  shape,
  required,
  disabled,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  name,
  value,
  inputMessage,
}: InputFieldProps) {
  return (
    <Label htmlFor={htmlFor} required={required} labelText={labelText}>
      <Input
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        name={name}
        shape={shape}
        isError={isError}
        isFocus={isFocus}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
      />
      {(isError || isFocus) && (
        <InputMessage isError={isError} isFocus={isFocus}>
          {inputMessage}
        </InputMessage>
      )}
    </Label>
  );
}
