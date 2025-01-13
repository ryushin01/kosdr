import { ElementType } from "react";

interface TypographyProps {
  as: ElementType;
  style: "headline" | "title" | "subtitle" | "body";
  children: string;
}

const Typography = ({ as, style, children }: TypographyProps) => {
  const As = as;
  // mobileGridCols와 같이 객체화

  return <As className={style}>{children}</As>;
};


export default Typography;
