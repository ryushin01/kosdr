type InputMessageProps = {
  isError?: boolean;
  isFocus?: boolean;
  children: string;
};

export default function InputMessage({
  isError,
  isFocus,
  children,
}: InputMessageProps) {
  console.log({ isError, isFocus });
  const textStyle = `text-[15px] ${
    isError
      ? "text-koser-secondary-red-50"
      : isFocus
      ? "text-koser-primary-80"
      : ""
  }`;
  return <span className={textStyle}>{children}</span>;
}
