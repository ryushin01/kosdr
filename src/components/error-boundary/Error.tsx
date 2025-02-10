"use client";

import { useRouter } from "next/navigation";
import { useErrorBoundary } from "react-error-boundary";

const Error = () => {
  const router = useRouter();
  const { resetBoundary } = useErrorBoundary();

  const toHomePage = () => router.push("/");

  return (
    <>
      <p>일시적인 오류가 발생했습니다.</p>
      <button type="button" onClick={resetBoundary}>새로고침</button>
      <button type="button" onClick={toHomePage}>홈으로 이동하기</button>
    </>
  );
};

export default Error;