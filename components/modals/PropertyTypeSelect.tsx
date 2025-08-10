import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MapPin } from "lucide-react";
import { MdMeetingRoom } from "react-icons/md";
import useParamHook from "@/hooks/use-param-hook";


const PropertyTypeSelect = () => {
  const { handleFilterParams } = useParamHook();
  return (
    <div className="flex text-gray-800 items-center space-x-2 lg:px-8 px-3 min-w-10">
      <Select
        onValueChange={(value) => {
          handleFilterParams(value, "property-type");
        }}
      >
        <SelectTrigger className="border-none text-gray-800 shadow-none p-0 h-auto focus:ring-0">
          <SelectValue
            placeholder={
              <span className="flex items-center gap-2">
                {" "}
                <MdMeetingRoom className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
                Room
              </span>
            }
          />
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
