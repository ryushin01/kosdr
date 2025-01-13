import { ElementType } from "react";

interface TypographyProps {
  as?: ElementType;
  isBold?: boolean;
  kind: "headline" | "title" | "subtitle" | "body";
  children: string;
}

/**
 * Typography props
 * @property {ElementType} as        - 태그 설정(기본값: span)
 * @property {boolean} isBold        - 텍스트 볼드 처리 유무(기본값: false)
 * @property {string} kind           - 타이포그래피 종류
 */


const Typography = ({ as = "span", isBold = false, kind, children }: TypographyProps) => {
  const As = as;
  // mobileGridCols와 같이 객체화

  return <As className={`${kind} ${isBold ? "font-semibold" : "font-normal"}`}>{children}</As>;
};


export default Typography;
