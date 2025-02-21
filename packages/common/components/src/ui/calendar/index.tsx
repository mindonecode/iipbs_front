"use client";

import * as React from "react";
import { ko } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "../button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ko}
      showOutsideDays={showOutsideDays}
      className={cn("p-[1.2rem]", className)}
      classNames={{
        months:
          "flex flex-col sm:flex-row space-y-[1.6rem] sm:space-x-[1.6rem] sm:space-y-0",
        month: "space-y-[1.6rem]",
        caption: "flex justify-center pt-[0.4rem] relative items-center",
        caption_label: "text-[1.4rem] font-medium",
        nav: "space-x-[0.4rem] flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-[2.8rem] bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-[0.4rem]",
        nav_button_next: "absolute right-[0.4rem]",
        table: "w-full border-collapse space-y-[0.4rem]",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-[3.6rem] font-normal text-[1.28rem]",
        row: "flex w-full mt-[0.8rem]",
        cell: "size-[3.6rem] text-center text-[1.4rem] p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-[3.6rem] p-0 font-normal aria-selected:opacity-100 text-[1.3rem]",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "!bg-primary !text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-[1.6rem]", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-[1.6rem]", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
