"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const toPreviousPage = () => router.back();
  const toHomePage = () => router.push("/");

  return (
    <section>
      <h1>404 Error</h1>
      <div>
        <button type="button" onClick={toPreviousPage}>이전 페이지로 돌아가기</button>
        <button type="button" onClick={toHomePage}>홈으로 이동하기</button>
      </div>
    </section>
  );
}
