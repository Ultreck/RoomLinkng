import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { MapPin } from "lucide-react";

type PropertyTypeSelectProps = {
    setIsSearched: (value: boolean) => void;
}
const PropertyTypeSelect = ({setIsSearched}: PropertyTypeSelectProps) => {
  return (
    <div className="flex text-gray-800 items-center space-x-2 px-8 min-w-0 flex-1">
      <Select onValueChange={() => setIsSearched(true)}>
        <SelectTrigger className="border-none text-gray-800 shadow-none p-0 h-auto focus:ring-0">
          <SelectValue placeholder="Rooms" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>What do you need?</SelectLabel>
            {["Rooms", "Property"].map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="flex items-center space-x-2"
              >
                <MapPin className="h-4 w-4 text-gray-500 hover:text-gray-600 flex-shrink-0" />
                <span>{option}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PropertyTypeSelect;
