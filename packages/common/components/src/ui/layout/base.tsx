import { Header } from "./header";
import { LNB } from "./lnb";
import "./common.css";
import { Footer } from "./footer";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex h-[calc(100vh-50px)]">
        <LNB />
        <div className="flex flex-1 flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
