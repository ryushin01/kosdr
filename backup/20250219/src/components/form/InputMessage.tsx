type InputMessageProps = {
  isError?: boolean;
  children: string;
};

/**
 * @name InputMessage
 * @version 1.0.0
 * @author 홍다인 <hdi0104@bankle.co.kr>
 */
export default function InputMessage({ isError, children }: InputMessageProps) {
  const textStyle = `_input-message ${isError ? "is-error" : ""}`;
  return <span className={textStyle}>{children}</span>;
}
