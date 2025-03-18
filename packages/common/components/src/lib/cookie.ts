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
  options: Cookies.CookieAttributes,
): void {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.set(name, value, options);
}

export function removeCookie(
  name: string,
  options: Cookies.CookieAttributes,
): void {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.remove(name, options);
}

export function getToken(key: string): string | undefined {
  return getCookie(key);
}

export function setToken(
  key: string,
  token: string,
  options: Cookies.CookieAttributes,
): void {
  setCookie(key, token, {
    ...options,
    path: "/",
  });
}

export function removeToken(key: string): void {
  removeCookie(key, { path: "/" });
}
