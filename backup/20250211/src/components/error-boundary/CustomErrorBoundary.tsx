"use client";

import { ReactNode, Suspense } from "react";
import { usePathname } from "next/navigation";
import { Fallback, Spinner } from "@components/error-boundary";
import { ErrorBoundary } from "react-error-boundary";

type CustomErrorBoundaryProps = {
  element: ReactNode;
}

const CustomErrorBoundary = ({ element }: CustomErrorBoundaryProps) => {
  const pathname = usePathname();

  return (
    <ErrorBoundary
      key={pathname}
      FallbackComponent={Fallback}
    >
      <Suspense fallback={<Spinner />}>
        {element}
      </Suspense>
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
