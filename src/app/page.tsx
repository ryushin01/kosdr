"use client";

import { GuideButton } from "@components/button";

export default function Home() {
  const handleClick = () => {
    console.log("클릭");
  };

  return (
    <div>
      <GuideButton
        shape="solid"
        color="neutral"
        size="medium"
        onClick={handleClick}
      >
        테스트 버튼
      </GuideButton>
    </div>
  );
}
