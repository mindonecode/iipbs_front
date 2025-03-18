import "./styles/base.css";
import "./styles/components.css";
import { AppProvider } from "./providers";

const App = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export { App };
