import "./styles/base.css";
import "./styles/components.css";
import { AppProvider } from "./providers";
import { cookies } from "next/headers";

const App = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const theme = (await cookies()).get("site-theme-key");

  return (
    <html lang="ko" data-theme={theme?.value}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export { App };
