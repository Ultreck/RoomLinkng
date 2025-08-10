"use client";

import React, { useEffect } from "react";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react"; // you can swap icons if needed
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DateRange } from "react-day-picker";
import useParamHook from "@/hooks/use-param-hook";

type CalendarRangeProps = {
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  date: DateRange | undefined;
};

const RangeCalendar = ({ setDate, date }: CalendarRangeProps) => {
  const { handleFilterParams } = useParamHook();

  useEffect(() => {
    if (date?.from) handleFilterParams(String(date?.from), "from");
    if (date?.to) handleFilterParams(String(date?.to), "to");
  }, [date, handleFilterParams]);

  const handleFrom = (dateFrom: DateRange | undefined) => {
    if (dateFrom?.from) {
      return dateFrom.from.toLocaleDateString("en", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }
  };

  const handleSelect = (selected: DateRange | undefined) => {
    if (!selected) {
      setDate(undefined);
      return;
    }
    // Detect single-click (from === to)
    const isSingleClick =
      selected.from &&
      selected.to &&
      selected.from.getTime() === selected.to.getTime();

    if (isSingleClick && selected.from) {
      const nextDay = new Date(selected?.from);
      nextDay.setDate(nextDay.getDate() + 1);
      setDate({ from: selected.from, to: nextDay });
    } else {
      // If both are selected (different), just set normally
      setDate(selected);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex border-0 w-36 outline-0 justify-between items-center space-x-2 font-normal">
          <CalendarIcon className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
          {date?.from ? handleFrom(date) : "Available from"}
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full">
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          numberOfMonths={2}
          selected={date}
          disabled={{ before: new Date() }}
          onSelect={handleSelect}
          className="rounded-lg border shadow-sm"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RangeCalendar;
