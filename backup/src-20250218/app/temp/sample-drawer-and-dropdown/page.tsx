"use client";

import { Dropdown } from "@components/common";
import { Drawer } from "@components/drawer";
import { useDisclosure } from "@hooks";
import { isBrowser, isMobile } from "react-device-detect";

export default function SampleDrawer() {
  const {
    isOpen: isDropdownOpen,
    open: openDropdown,
    close: closeDropdown,
  } = useDisclosure();

  const {
    isOpen: isDrawerOpen,
    open: openDrawer,
    close: closeDrawer,
  } = useDisclosure();

  console.log(isBrowser);
  // isBrowser true
  // [c] 1. backdrop 미노출
  // 2. 디자인 변경
  // [c] 3. 외부 영역 클릭 시 닫기 기능

  return (
    <div>
      <button type="button" className="absolute top-1/2 left-1/2" onClick={isBrowser ? openDropdown : openDrawer}>드롭다운
        또는 드로어 열기
      </button>

      {(isBrowser && isDropdownOpen) &&
        <Dropdown
          onClose={closeDropdown}
        />
      }

      {(isMobile && isDrawerOpen) &&
        <Drawer
          title="비밀번호 변경, 로그아웃, 서비스 이용문의 정보 제공 섹션"
          onClose={closeDrawer} />
      }
    </div>
  );
}
