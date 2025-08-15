"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingTable, { bookings } from "./BookingTable";

const BookingTabs = () => {
  return (
    <div className="mt-8">
      <Tabs defaultValue="all">
        <TabsList className="bg-white w-full z-10 grid sm:flex justify-between">
          <div className="text">Bookings ({bookings?.length} Results)</div>
          <div className="text py-3 z-10 bg-white md:space-x-4 space-x-2.5">
            <TabsTrigger
              className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-3 lg:px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-3 lg:px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
              value="confirmed"
            >
              Confirmed
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-3 lg:px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
              value="completed"
            >
              Completed
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-3 lg:px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
              value="cancelled"
            >
              Cancelled
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="all">
          <BookingTable type="All" />
        </TabsContent>
        <TabsContent className="w-full" value="confirmed">
          <BookingTable type="Confirmed" />
        </TabsContent>
        <TabsContent value="completed">
          <BookingTable type="Completed" />
        </TabsContent>
        <TabsContent value="cancelled">
          <BookingTable type="Cancelled" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingTabs;
