import { useErrorBoundary } from "react-error-boundary";

const Error = () => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <>
      <p>일시적인 오류가 발생했습니다.</p>
      <button type="button" onClick={resetBoundary}>새로고침</button>
    </>
  );
};

export default Error;