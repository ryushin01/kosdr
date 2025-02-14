import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import Radio from "./Radio";

type RadioGroupProps = {
  data: RadioProps[];
};

type RadioProps = {
  name: string;
  value: string;
  labelText: string;
  defaultChecked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "className"
>;

/**
 * @name RadioGroup
 * @version 1.0.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 */
export default function RadioGroup({
                                     data,
                                   }: RadioGroupProps) {
  const [withdrawData, setWithdrawData] = useState({
    reason: "",
    checked: false,
  });

  const handleRadio = (key: string, val: string | boolean) => {
    setWithdrawData({ ...withdrawData, [key]: val });
  };

  return (
    <div>
      {data.map((radio) => {
        const { id, name, value, labelText, defaultChecked } = radio;

        return (
          <Radio key={id} id={id} name={name} value={value} labelText={labelText} defaultChecked={defaultChecked}
                 onChange={handleRadio} />
        );
      })}
    </div>
  );
}
