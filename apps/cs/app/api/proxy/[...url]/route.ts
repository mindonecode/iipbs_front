import {
  ACCESS_TOKEN,
  AUTH_USER_ID,
  CLAIM_NAME,
  REFRESH_TOKEN,
  SERVER_API_URL,
  SITE_ID,
} from "@/shared/config/env";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  props: { params: Promise<{ url: string[] }> },
) {
  const params = await props.params;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Site-Id": SITE_ID ?? "",
  };

  const cookieStore = await cookies();

  // silent refresh
  if (params.url.includes("refresh")) {
    const refreshToken = cookieStore.get(REFRESH_TOKEN);
    headers[CLAIM_NAME] = refreshToken?.value ?? "";

    if (!headers[CLAIM_NAME]) {
      return NextResponse.json({ message: "Can't refresh" }, { status: 401 });
    }
  }

  try {
    const body = await request.json();
    const result = await fetch(`${SERVER_API_URL}/${params.url.join("/")}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!result.ok) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 },
      );
    }

    const accessToken = result.headers.get(ACCESS_TOKEN);
    const refreshToken = result.headers.get(REFRESH_TOKEN);
    const userId = result.headers.get(AUTH_USER_ID);

    if (accessToken && userId) {
      const response = NextResponse.json({
        [ACCESS_TOKEN]: accessToken,
        [AUTH_USER_ID]: userId,
      });

      if (refreshToken) {
        cookieStore.set(REFRESH_TOKEN, refreshToken, {
          httpOnly: true,
          sameSite: "lax",
          path: "/",
        });
      }

      return response;
    }

    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 },
    );
  }
}
