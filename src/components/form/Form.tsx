import { ReactNode } from "react";

type FormPops = {
  onSubmit: () => void;
  legendText: string;
  action?: string;
  method?: string;
  enctype?: "text/plain" | "multipart/form-data";
  children?: ReactNode;
  isHidden?: boolean;
};

/**
 * @name Form
 * @version 1.0.0
 * @author 홍다인 <hdi0104@bankle.co.kr>
 * @property {string} onSubmit     - 데이터 전송 이벤트 동작을 정의합니다.
 * @property {string} action       - form 데이터를 처리할 프로그램의 URI를 정의합니다.
 * @property {string} method       - 서버로 데이터를 전송하는 방식을 정의합니다.
 * @property {string} enctype      - form 인코딩 타입 속성을 정의합니다.
 * @property {string} legendText   - a11y 또는 legend에 사용 될 텍스트를 정의합니다.
 * @property {ReactNode} children  - 라벨과 함께 배치되는 input을 정의합니다.
 */
export default function Form({
                               children,
                               onSubmit,
                               legendText,
                               action,
                               method,
                               enctype = "text/plain",
                               isHidden = true,
                             }: FormPops) {
  const hiddenLegend = isHidden ? "_hidden" : "";
  return (
    <form action={action} method={method} encType={enctype} onSubmit={onSubmit}>
      {/* 웹 접근성 적용 a11y 필요 aria-label..?*/}
      <fieldset>
        <legend className={hiddenLegend}>{legendText}</legend>
        {children}
      </fieldset>
    </form>
  );
}
