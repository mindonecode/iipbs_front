import { NextRequest, NextResponse } from "next/server";

const serverApiUrl =
  process.env.NEXT_PUBLIC_SERVER_API_URL ?? "http://localhost:3000";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  if (pathname.startsWith("/server")) {
    return NextResponse.rewrite(
      `${serverApiUrl}${pathname.replace("/server", "")}`,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/server/:path*",
};
