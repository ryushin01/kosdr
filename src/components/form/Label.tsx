import { ReactNode } from "react";

type LabelProps = {
  htmlFor: string;
  labelText: string;
  children?: ReactNode;
  required?: boolean;
  isFocus?: boolean;
  isError?: boolean;
};

/**
 * Input props
 * @property {string} htmlFor      - 인풋 id와 매치 시키는 라벨 속성을 정의합니다.
 * @property {string} labelText    - 라벨의 텍스트 내용을 정의합니다.
 * @property {ReactNode} children  - 라벨과 함께 배치되는 input을 정의합니다.
 * @property {boolean} required    - 라벨에 필수 표시 여부를 정의합니다.
 * @property {boolean} isFocus     - 라벨에 포커스 여부를 정의합니다.
 * @property {boolean} isError     - 라벨에 에러 여부를 정의합니다.
 */

export default function Label({
  htmlFor,
  labelText,
  children,
  required,
  isFocus = false,
  isError = false,
}: LabelProps) {
  return (
    <div>
      {!!htmlFor ? (
        <label>
          {labelText}
          {required && <span>*</span>}
          {children}
          {(isError || isFocus) && <span></span>}
        </label>
      ) : (
        <>
          <label htmlFor={htmlFor}>
            {labelText}
            {required && <span>*</span>}
          </label>
          {children}
          {(isError || isFocus) && <span></span>}
        </>
      )}
    </div>
  );
}
