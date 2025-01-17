/*
  NOTE: 아이콘은 svg 파일로 관리하며, 디자인 시스템이 정의된 것처럼 네 가지 규격(14, 20, 24, 36)에 따라 폴더를 구성합니다. 아이콘을 가져다 쓸 때에는 next/image 기반의 Image 태그에 담아서 사용합니다.
  - ex) <Image src={sampleIcons36} alt="샘플 아이콘 36 사이즈" />
 */

import SampleIcon14 from "@icons/14/sampleIcon14.svg";
import SampleIcon20 from "@icons/20/sampleIcon20.svg";
import SampleIcon24 from "@icons/24/sampleIcon24.svg";
import SampleIcon36 from "@icons/36/sampleIcon36.svg";

// 임시 아이콘
import CalendarIcon from "@icons/temp/calendarIcon.svg";

export {
  SampleIcon14,
  SampleIcon20,
  SampleIcon24,
  SampleIcon36,

  // 임시 아이콘
  CalendarIcon,
};
