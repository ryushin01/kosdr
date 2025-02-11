import { ChangeEvent } from "react";
import Image from "next/image";
import { SampleIcon14 } from "@icons";

type SearchInputProps = {
  shape?: "lg" | "xl";
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onClick?: () => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isFocus?: boolean;
  name: string;
  value: string;
};

/**
 * SearchInput props
 * @property {string} shape        - 인풋의 쉐입을 정의합니다.
 * @property {boolean} required    - 인풋의 필수 여부를 정의합니다.
 * @property {boolean} disabled    - 인풋의 비활성화 상태를 정의합니다.
 * @property {function} onChange   - 인풋 작성시 포커스시 동작을 위해 정의합니다.
 * @property {function} onFocus    - 인풋 포커스시 동작을 위해 정의합니다.
 * @property {function} onBlur     - 인풋 포커스 해제시 포커스시 동작을 위해 정의합니다.
 * @property {string} placeholder  - 인풋의 힌트 텍스트를 정의합니다.
 * @property {boolean} isFocus     - 인풋의 포커스 상태를 정의합니다.
 * @property {string} name         - 인풋의 이름을 정의합니다.
 * @property {string} value        - 인풋에 입력된 값을 정의합니다.
 * @property {function} onClick    - 버튼 클릭시 동작을 위해 정의합니다.
 */

/**
 * @name Input
 * @version 1.0.0
 * @author 홍다인 <hdi0104@bankle.co.kr>
 */

export default function SearchInput({
  shape = "lg",
  required = false,
  disabled,
  onClick,
  onChange,
  onBlur,
  placeholder = "입력해 주세요.",
  name,
  value,
  isFocus,
  ...props
}: SearchInputProps) {
  const className = `_textInput ${
    shape === "lg" ? "rounded-lg" : "rounded-3xl"
  } bg-koser-grayscale-0 w-[200px] ${
    isFocus ? "border-koser-primary-80" : "border-koser-grayscale-40"
  }`;

  return (
    <label className={className}>
      <input
        type="search"
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className="bg-transparent outline-none"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      <button onClick={onClick} type="button">
        {/* TODO : 검색아이콘으로 변경 */}
        {<Image src={SampleIcon14} alt="검색 아이콘" width={14} height={14} />}
      </button>
    </label>
  );
}
