import { ReactNode } from "react";
import { Gnb, Footer } from "@components/layout";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="_main-wrapper">
      <Gnb />
      <main>{children}</main>
      <Footer />
    </div>
  );
}