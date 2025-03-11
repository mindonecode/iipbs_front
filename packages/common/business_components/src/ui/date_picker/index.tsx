"use client";

import "./date-picker.css";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DayPickerSingleProps } from "react-day-picker";

import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@common/components/ui";
import { cn } from "../../lib/utils";
import { FormControl } from "../form";

type DatePickerProps = DayPickerSingleProps & { field: { value: Date; onChange: (date: Date | undefined) => void } };

export function DatePicker({ field }: DatePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field?.value && "text-muted-foreground"
                        )}
                    >
                        {field?.value ? (
                            format(field?.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={field?.value}
                    onSelect={field?.onChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
