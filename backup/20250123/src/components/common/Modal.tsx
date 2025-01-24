// TODO
// 1. 닫기 기능 개발(닫기 기능 적용 범위: 모달 내부 닫기 버튼, 백드롭 클릭 시 닫기, ESC 키 입력 시 닫기)
// 2. 모달 여닫기 시 내부 컨텐츠 포커싱 및 블러 처리
// 3. 웹 접근성 적용(WAI-ARIA > ARIA-LIVE)

"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const portal = document.getElementById("portal");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // clean-up effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className="_modal-backdrop">
      <section className="_modal-container">{children}</section>
    </div>,
    portal as Element,
  );
};

export default Modal;
