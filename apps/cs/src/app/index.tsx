import "./styles/base.css";
import "./styles/components.css";
import { AuthProvider, CookieProvider, QueryProvider } from "@/shared/provider";

const App = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <CookieProvider>
            <AuthProvider>{children}</AuthProvider>
          </CookieProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export { App };
