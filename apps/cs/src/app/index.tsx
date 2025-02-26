import type { Metadata } from "next";
import "./styles/base.css";
import "./styles/components.css";

export const metadata: Metadata = {
  title: "유역하수도 통합 정보플랫폼",
};

const App = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export { App };
