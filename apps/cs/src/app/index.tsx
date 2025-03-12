import "./styles/base.css";
import "./styles/components.css";
import { CookieProvider, QueryProvider } from "@/shared/provider";

const App = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <CookieProvider>{children}</CookieProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export { App };
