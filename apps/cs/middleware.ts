import { NextRequest, NextResponse } from "next/server";

const serverApiUrl =
  process.env.NEXT_PUBLIC_SERVER_API_URL ?? "http://localhost:3000";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const searchParams = req.nextUrl.searchParams;

  if (pathname.startsWith("/server")) {
    const queryParams = searchParams.toString();
    const newUrl = `${serverApiUrl}${pathname.replace("/server", "")}${
      queryParams ? `?${queryParams}` : ""
    }`;
    console.log("Rewriting to: ", newUrl);
    return NextResponse.rewrite(new URL(newUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/server/:path*",
};
