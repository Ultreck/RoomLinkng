"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import OverviewMain from "./overview-tab/OverviewMain";
import ReviewsSection from "./reivew-tab/ReviewsSection";

const DetailsTabs = () => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  return (
    <div className="flex w-full max flex-col gap-10">
      <Tabs defaultValue="overview">
        <TabsList className="bg-white gap-2">
          <TabsTrigger
            className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
            value="overview"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
            value="calendar"
          >
            Calendar
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
            value="reviews"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewMain />
        </TabsContent>
        <TabsContent className="w-full" value="calendar">
          <div className="text mt-5">
            <h1 className="text-lg font-bold">A month in Ikeja</h1>
            <span className="text-sm">Jul 22, 2025 - Aug 22, 2025</span>
          </div>
          <div className="text flex justify-end">
            <div className="text flex items-center w-1/5">
              {" "}
              <span className="text bg-[#E48C15] h-4 w-4 p-2 absolute rounded-full "></span>{" "}
              <span className="text ml-5">Available days</span>{" "}
            </div>
            <div className="text flex items-center w-1/5">
              {" "}
              <span className="text bg-[#E0E0E0] h-4 w-4 p-2 absolute rounded-full "></span>{" "}
              <span className="text ml-5">Booked days</span>{" "}
            </div>
          </div>
          <div className=" w-full mt-8">
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              numberOfMonths={2}
              selected={date}
              disabled={{ before: new Date() }}
              onSelect={setDate}
              className="rounded-lg w-full border shadow-sm"
            />
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <ReviewsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DetailsTabs;
