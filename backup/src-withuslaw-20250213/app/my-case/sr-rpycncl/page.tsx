"use client";

import React from "react";
import { Button, Typography } from "@components";
import PayGroupItem from "@app/my-case/PayGroupItem";
import RpyCnclResult from "@app/my-case/rpycncl/RpyCnclResult";
import PayFail from "@app/my-case/PayFail";

// mock data
import mockData from "@data/reapay-searchsrrepayinfo/00/reapay-searchsrrepayinfo.json";

export default function SR_RPYCNCL() {
  /**
   * @property {function} a - [GET] 총 대출금 및 상환영수증 등록 필요 은행 목록 데이터 수신 함수
   * @property {function} b - [FLUTTER] 은행별 상환영수증 등록 함수
   * @property {function} c - [POST] 등록하기 버튼 터치 시 실행 함수
   *                                 (업로드 사진 등록 > 토스트 팝업 > 사건 상세 이동)
   * @property {boolean} d  - 은행별 이미지 한 장 이상 등록 시 등록하기 버튼 활성화
   * @property {boolean} e  - 상환영수증 등록 버튼 비활성화 조건
   *                          (업로드 이미지 없을 경우 / 실행일 D+1)
   * @property {boolean} f  - 상환영수증 등록 시 '상환영수증 확인' 중 문구 노출
   * @property {boolean} g  - 등록하기 버튼 활성화 조건
   *                          (은행별 이미지 모두 등록된 경우)
   * @property {boolean} h  - 관리자가 상환영수증 반려 시 '반려' 문구 표시
   * @property {boolean} i  - 상환영수증 재등록 버튼 비활성화 조건
   *                          (업로드 이미지 있을 경우 / 실행일 D+1)
   * @property {boolean} j  - 관리자가 상환영수증 승인 시 '완료' 문구 표시
   */

  /**
   * @name adminReqStatCd
   * @description 관리자 요청 상태 코드
   * @summary 00: 관리자 요청 전
   *          01: 관리자 확인 중
   *          02: 관리자 반려
   *          03: 관리자 승인 완료
   */

  console.log(mockData.data);
  const { adminReqStatCd, execDt, loanNo, totalAmount } = mockData.data;

  return (
    <div className="pt-5 pb-24">
      <section className="flex flex-col px-4 gap-y-4">
        <Typography
          type={Typography.TypographyType.H1}
          color="text-kos-gray-800"
        >
          각 은행별 대출 잔액이 확인되는
          <br />
          상환영수증을 등록해 주세요
        </Typography>
        <Typography
          type={Typography.TypographyType.B1}
          color="text-kos-gray-700"
        >
          상환내역이 없으실 경우 대출완납증명서와 대출금 이체 영수증을 등록해
          주세요.
        </Typography>
      </section>

      <section className="flex flex-col w-full divide-y">
        <PayGroupItem
          containerClassName="px-4 pt-10 pb-6"
          label="총 대출금"
          payAmt={totalAmount}
        >
          {/* 괸라자 확인 중, 관리자 승인 완료 시 */}
          {(adminReqStatCd === "01" || adminReqStatCd === "03") && (
            <RpyCnclResult
              statCd={adminReqStatCd === "01" ? "03" : "10"}
              loanNo=""
              masterStatCd=""
              bankCd=""
              execDt=""
              handleOpenLocationSheet={() => console.log("worked")}
              handleClickEnrollReceipt={() => console.log("worked")}
              handlePayRefundRequest={() => console.log("worked")}
            />
          )}
        </PayGroupItem>
      </section>

      {/* TODO: 상환영수증 등록 시 '상환영수증 확인 중' 문구 노출 및 하단 섹션 미노출 처리 */}
      {/* 관리자 요청 전, 관리자 반려 시 */}
      {(adminReqStatCd === "00" || adminReqStatCd === "02") && (
        <section className="pt-3 border-t border-kos-gray-200">
          {/* 관리자 반려 시 */}
          {adminReqStatCd === "02" && (
            <div className="px-4 py-6">
              <PayFail text={"반려"} />
            </div>
          )}

          {/* TODO: map method */}
          <PayGroupItem
            containerClassName="px-4 py-3"
            label="우리은행 상환"
            required={true}
          >
            <RpyCnclResult
              statCd="00"
              loanNo=""
              masterStatCd=""
              bankCd=""
              execDt=""
              handleOpenLocationSheet={() => console.log("worked")}
              handleClickEnrollReceipt={() => console.log("worked")}
              handlePayRefundRequest={() => console.log("worked")}
              isSrCase={true}
            />
          </PayGroupItem>

          <PayGroupItem
            containerClassName="px-4 py-3"
            label="국민은행 상환"
            required={true}
          >
            <RpyCnclResult
              statCd="02"
              loanNo=""
              masterStatCd=""
              bankCd=""
              execDt=""
              handleOpenLocationSheet={() => console.log("worked")}
              handleClickEnrollReceipt={() => console.log("worked")}
              handlePayRefundRequest={() => console.log("worked")}
              isSrCase={true}
            />
          </PayGroupItem>

          <PayGroupItem containerClassName="px-4 py-3" label="기타">
            <RpyCnclResult
              statCd="00"
              loanNo=""
              masterStatCd=""
              bankCd=""
              execDt=""
              handleOpenLocationSheet={() => console.log("worked")}
              handleClickEnrollReceipt={() => console.log("worked")}
              handlePayRefundRequest={() => console.log("worked")}
              isSrCase={true}
            />
          </PayGroupItem>
        </section>
      )}

      {/* 관리자 요청 전, 관리자 반려 시 */}
      {(adminReqStatCd === "00" || adminReqStatCd === "02") && (
        <section
          className="fixed bottom-0 inset-x-0 z-10 p-4 bg-kos-white"
          style={{
            boxShadow: "0px -4px 20px 0px rgba(204, 204, 204, 0.30)",
          }}
        >
          <Button.CtaButton buttonType={"submit"} size={"XLarge"} state="On">
            등록하기
          </Button.CtaButton>
        </section>
      )}
    </div>
  );
}
