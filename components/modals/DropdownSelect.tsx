import { Calendar } from "lucide-react";
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

type DataProps = {
  value: string;
  label: string;
};

type DropdownSelectProps = {
  data: DataProps[];
  label: string;
  setIsSearched: (value: boolean) => void;
  placeHolder?: string;
};
const DropdownSelect = ({
  data,
  label,
  setIsSearched,
  placeHolder
}: DropdownSelectProps) => {
  return (
    <div className="flex items-center space-x-2 px-8 border-r border-white bg-white rounded-full">
      <Calendar className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
      <Select onValueChange={() => setIsSearched(true)}>
        <SelectTrigger className="border-none shadow-none p-0 h-auto focus:ring-0">
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {data.map((date) => (
              <SelectItem
                key={date?.value}
                value={date?.value}
                className="flex items-center space-x-2"
              >
                <span>{date?.label}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropdownSelect;
