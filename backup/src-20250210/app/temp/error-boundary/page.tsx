"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Target from "@app/temp/error-boundary/target";
import Error from "@app/temp/error-boundary/error";
import Loading from "@app/temp/error-boundary/loading";

export default function ErrorBoundaryPage() {

  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Target />
      </Suspense>
    </ErrorBoundary>
  );
}
