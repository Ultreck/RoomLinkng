"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
const RangeCalender = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 7, 28));
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <Calendar
          mode="single"
          defaultMonth={date}
          numberOfMonths={2}
          selected={date}
          onSelect={setDate}
          className="rounded-lg border shadow-sm"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RangeCalender;
