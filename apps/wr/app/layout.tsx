import { BaseLayout } from "@common/components";
import "./globals.css";
import { StoreProvider } from "./store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <StoreProvider>
            <BaseLayout>
                {children}
            </BaseLayout>
          </StoreProvider>
      </body>
    </html>
  );
}
