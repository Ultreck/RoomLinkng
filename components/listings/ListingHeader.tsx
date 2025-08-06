import React from "react";
import LocationSelect from "../modals/LocationSelect";
import RangeCalender from "../RangeCalender";
import { Calendar, ChevronDown, Search } from "lucide-react";
import DropdownSelect from "../modals/DropdownSelect";
import PropertyTypeSelect from "../modals/PropertyTypeSelect";
import { Button } from "../ui/button";
import { endDate } from "@/lib/helper";

type ListingHeaderProps = {
    setIsSearched: (value: boolean) => void;
}
const ListingHeader = ({setIsSearched}: ListingHeaderProps) => {
  return (
    <div className="w-full">
      <div className="text flex  h-14 px-3 justify-between py-2 space-x-7">
        {/* Location Selector */}
        <LocationSelect
          className=""
          title=""
          setIsSearched={setIsSearched}
        />

        {/* Month Selector */}
        <DropdownSelect
          data={endDate}
          label="Minimun of one month"
          setIsSearched={setIsSearched}
        />

        {/* Rooms Selector */}
        <PropertyTypeSelect setIsSearched={setIsSearched} />

        {/* Search Button */}
        <Button className="bg-green-600 cursor-pointer hover:bg-green-700 rounded-full h-10 w-10 p-0">
          <Search className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ListingHeader;
