import Cookies from "js-cookie";

export function getCookie(name: string): string | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }
  return Cookies.get(name);
}

export function setCookie(
  name: string,
  value: string,
  options?: Cookies.CookieAttributes,
): void {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.set(name, value, options);
}

export function removeCookie(
  name: string,
  options?: Cookies.CookieAttributes,
): void {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.remove(name, options);
}
