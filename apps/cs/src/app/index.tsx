import "./styles/base.css";
import "./styles/components.css";

const App = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export { App };
