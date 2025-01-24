"use client";

import { isBrowser } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ResponsiveSwiper() {
  const pcPagination = {
    type: "fraction",
    renderFraction: function(currentClass: string, totalClass: string) {
      return "<span class=\"" + currentClass + "\"></span>" +
        "/" +
        "<span class=\"" + totalClass + "\"></span>";
    },
  };

  const mobilePagination = {
    type: "progressbar",
    renderProgressbar: function(progressbarFillClass: string) {
      return "<span class=\"" + progressbarFillClass + "\"></span>";
    },
  };

  return (
    <>
      <Swiper
        className="_swiper"
        // 사용 모듈 정의
        modules={[Navigation, Pagination]}
        // swiper-wrapper 태그 정의
        wrapperTag="ul"
        // 한 번에 노출할 슬라이드 개수 정의
        slidesPerView={"auto"}

        // 반응형 웹 중단점
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}

        pagination={isBrowser ? pcPagination : mobilePagination}

        navigation={{
          prevEl: "._btn-prev",
          nextEl: "._btn-next",
        }}

        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide
          // swiper-slide 태그 정의
          tag="li"
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          // swiper-slide 태그 정의
          tag="li"
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          // swiper-slide 태그 정의
          tag="li"
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          // swiper-slide 태그 정의
          tag="li"
        >
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          // swiper-slide 태그 정의
          tag="li"
        >
          Slide 5
        </SwiperSlide>

        <button type="button" className="_btn-prev">이전</button>
        <button type="button" className="_btn-next">다음</button>
      </Swiper>
    </>
  );
}
