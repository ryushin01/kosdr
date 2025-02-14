import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

type RadioProps = {
  id: string;
  name: string;
  value: string;
  labelText: string;
  defaultChecked?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "className"
>;

/**
 * @name Radio
 * @version 1.0.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 * @property {string} id              - 라벨링을 위한 id
 * @property {string} name            - 라디오 그룹 동시 선택 제어
 * @property {string} value           - 양식 제출 시 서버에서 식별하기 위한 선택값
 * @property {string} labelText       - 라벨 텍스트
 * @property {boolean} defaultChecked  - 기본 선택값
 * @property {function} onChange      - 선택 시 호출 함수
 */
export default function Radio({
                                id,
                                name,
                                value,
                                labelText,
                                defaultChecked,
                                onChange,
                                ...props
                              }: RadioProps) {
  const className = `_radio`;

  return (
    <label>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        className={className}
        {...props}
      />
      <span>{labelText}</span>
    </label>
  );
}
