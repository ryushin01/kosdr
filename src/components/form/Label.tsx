import { ReactNode } from "react";

type LabelProps = {
  htmlFor?: string;
  labelText?: string;
  children?: ReactNode;
  required?: boolean;
};

/**
 * @name Label
 * @version 1.0.0
 * @author 홍다인 <hdi0104@bankle.co.kr>
 * @property {string} htmlFor      - 인풋 id와 매치 시키는 라벨 속성을 정의합니다.
 * @property {string} labelText    - 라벨의 텍스트 내용을 정의합니다.
 * @property {ReactNode} children  - 라벨과 함께 배치되는 input을 정의합니다.
 * @property {boolean} required    - 라벨에 필수 표시 여부를 정의합니다.
 */
export default function Label({
                                htmlFor,
                                labelText,
                                children,
                                required,
                              }: LabelProps) {
  return (
    <div>
      {!htmlFor ? (
        <label>
          {labelText}
          {required && <span>*</span>}
          {children}
        </label>
      ) : (
        <>
          <label htmlFor={htmlFor}>
            {labelText}
            {required && <span>*</span>}
          </label>
          {children}
        </>
      )}
    </div>
  );
}
