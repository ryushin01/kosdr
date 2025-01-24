"use client";

import { Modal, ResponsiveGridSystem, Typography } from "@components/common";

import { useState } from "react";
import { GuideButton } from "@components/button";

export default function Home() {

  const [isOpenedModal, setIsOpenedModal] = useState(false);

  return (
    <>
      <ResponsiveGridSystem mobile={1} tablet={2} desktop={3}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ResponsiveGridSystem>

      <Typography as="h1" kind="title" isBold={true}>
        텍스트
      </Typography>

      <GuideButton shape="solid" color="neutral" size="medium" onClick={() => setIsOpenedModal(true)}>오픈</GuideButton>

      {isOpenedModal &&
        <Modal>
          <div>modal</div>
        </Modal>
      }
    </>
  );
}
