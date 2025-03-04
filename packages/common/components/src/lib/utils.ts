import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCssVariableValue = (variableName: string): string => {
  if (typeof window === "undefined") return "";

  const value = getComputedStyle(document.documentElement).getPropertyValue(
    variableName,
  );

  if (value.trim() === "") return "#2094fa";

  return value.trim();
};
