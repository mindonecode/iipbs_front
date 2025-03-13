"use client";

import "./date-picker.css";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DayPickerSingleProps } from "react-day-picker";

import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@common/components/ui";
import { cn } from "../../lib/utils";
import { FormControl } from "../form";

type DatePickerProps = DayPickerSingleProps & { field: { value: Date; onChange: (date: Date | undefined) => void  } ,selectClass:string|undefined   };

export function DatePicker({ field, selectClass }: DatePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        color="white"
                        variant={"outline"}
                        className={!selectClass? cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field?.value && "text-muted-foreground",
                            
                        ):selectClass}
                    >
                        {field?.value ? (
                            format(field?.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="h-4" />
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
