"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button, Typography } from "@components";
import { Size } from "@components/Constants";
import { getCompareWithToday } from "@utils/dateUtil";
import { usePayInfoData } from "@libs";
import { caseDetailAtom } from "@stores";
import { useAtomValue } from "jotai";
import PayProceeding from "@app/my-case/PayProceeding";
import PaySuccess from "@app/my-case/PaySuccess";
import PayFail from "@app/my-case/PayFail";
import PayGroupItem from "@app/my-case/PayGroupItem";

/**
 * @name owshDocStatCd
 * @description 소유권 서류 상태 코드
 * @summary 01: 서류 확인 중
 *          02: 지급 완료
 *          03: 서류 반려
 *          04: 지급 실패
 */

export default function SrLoanInfo() {
  const router = useRouter();
  const { loanNo } = useAtomValue(caseDetailAtom);
  const { execDt } = usePayInfoData({ loanNo });

  // 대출실행일이 현재보다 과거이면 true, 같거나 미래이면 false
  const isPast = getCompareWithToday(execDt) === "past";

  return (
    <div className="flex flex-col justify-between grow w-full h-full">
      <div>
        <Typography
          type={Typography.TypographyType.H1}
          color="text-kos-gray-800"
        >
          대출금 지급 결과를
          <br />
          확인해주세요
        </Typography>
        <div className="w-full flex flex-col gap-y-3">
          <PayGroupItem
            label="총 대출금"
            payAmt={50000000}
            containerClassName="pt-6"
          >
            {/* TODO: SR > 서류 확인 중 */}
            <PayProceeding text={"서류 확인 중"} />

            {/* TODO: SR > 지급 완료 */}
            <PaySuccess text={"지급 완료"} />

            {/* TODO: SR > 서류 반려 */}
            <div className="flex justify-between">
              <PayFail text={"서류 반려"} />
              <Button.CtaButton
                size={Size.Small}
                state={"Default"}
                disabled={isPast}
                onClick={() => router.push("/my-case/pay-request/sr-loan-pay")}
              >
                다시 요청하기
              </Button.CtaButton>
            </div>
          </PayGroupItem>
        </div>
      </div>
    </div>
  );
}
