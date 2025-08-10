import React, { Suspense } from "react";
import LocationSelect from "../modals/LocationSelect";
import DropdownSelect from "../modals/DropdownSelect";
import PropertyTypeSelect from "../modals/PropertyTypeSelect";
import { endDate } from "@/lib/helper";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const ListingHeader = () => {
  return (
    <div className="w-full">
      <Suspense fallback={null}>
        <div className="text flex  h-14 px-3 justify-between py-2 space-x-7">
          {/* Rooms Selector */}
          <PropertyTypeSelect />

          {/* Location Selector */}
          <LocationSelect className="" title="Lagos" />

          {/* Month Selector */}
          <DropdownSelect
            data={endDate}
            label="Minimun of one month"
            placeHolder="July"
          />

          {/* Search Button */}
          <Link
            href={"/landlord/listing/create"}
            className="bg-[#00A859] text-white cursor-pointer flex items-center gap-2 px-5 py-1 rounded-full hover:bg-green-700"
          >
            <FaPlus className="h-5 w-5 text-white" /> Add Listing
          </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default ListingHeader;
