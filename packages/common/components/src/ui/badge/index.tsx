import "./badge.css";

import * as React from "react";

import { cn } from "../../lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary" | "destructive" | "outline";
  color?:
    | "red"
    | "blue"
    | "yellow"
    | "orange"
    | "smokyBlue"
    | "purple"
    | "green"
    | "gray"
    | "lightGray";
  size?: "base" | "lg";
};

function Badge({
  className,
  variant = "default",
  color,
  size = "base",
  ...props
}: BadgeProps) {
  return (
    <div className={cn("badge", variant, color, size, className)} {...props} />
  );
}

export { Badge };
