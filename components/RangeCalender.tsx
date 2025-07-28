"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DateRange } from "react-day-picker";
const RangeCalender = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          numberOfMonths={2}
          selected={date}
          disabled={{ before: new Date() }}
          onSelect={setDate}
          className="rounded-lg w-[2/3] border shadow-sm"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RangeCalender;
