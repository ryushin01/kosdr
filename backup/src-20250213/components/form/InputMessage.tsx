type InputMessageProps = {
  isError?: boolean;
  isFocus?: boolean;
  children: string;
};

/**
 * @name InputMessage
 * @version 1.0.0
 * @author 홍다인 <hdi0104@bankle.co.kr>
 */
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
