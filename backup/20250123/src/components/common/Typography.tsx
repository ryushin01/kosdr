import { ElementType } from "react";

interface TypographyProps {
  as?: ElementType;
  isBold?: boolean;
  kind: "display-1" | "display-2" | "display-3" | "headline-1" | "headline-2" | "headline-3" | "title-1" | "title-2" | "title-3" | "body-1" | "body-2" | "body-3" | "caption-1" | "caption-2" | "caption-3";
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
  const typography: { [key: string]: string } = {
    "display-1": "text-5xl leading-[62px]",
    "display-2": "text-[40px] leading-[54px]",
    "display-3": "text-4xl leading-[48px]",
    "headline-1": "text-[32px] leading-[44px]",
    "headline-2": "text-[28px] leading-10",
    "headline-3": "text-2xl leading-[34px]",
    "title-1": "text-xl leading-[30px]",
    "title-2": "text-lg leading-[26px]",
    "title-3": "text-base",
    "body-1": "text-[15px] leading-[22px]",
    "body-2": "text-sm",
    "body-3": "text-[13px] leading-[19px]",
    "caption-1": "text-[12px] leading-[18px]",
    "caption-2": "text-[11px] leading-[17px]",
    "caption-3": "text-[10px] leading-4",
  };

  return <As className={`${typography[kind]} ${isBold ? "font-semibold" : "font-normal"}`}>{children}</As>;
};


export default Typography;
