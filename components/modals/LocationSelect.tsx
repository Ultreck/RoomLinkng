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
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import useParamHook from "@/hooks/use-param-hook";

type LocationSelectProps = {
  className?: string;
  // setIsSearched: (value: boolean) => void;
  title?: string;
};
const LocationSelect = ({
  className,
  // setIsSearched,
  title,
}: LocationSelectProps) => {
  const { handleSearchParams } = useParamHook();
  return (
    <div>
      <div
        className={cn(
          "flex items-center space-x-2  lg:px-8 px-3  rounded-full",
          className
        )}
      >
        <Select
          onValueChange={(value) => {
            // setIsSearched(true);
            handleSearchParams(value, "search");
          }}
        >
          <SelectTrigger className="border-none shadow-none text-[#474747] p-0 h-auto focus:ring-0">
            <SelectValue
              placeholder={
                <span className="flex items-center gap-2">
                  {" "}
                  <MapPin className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
                  {title}
                </span>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Suggestions</SelectLabel>
              {[
                "Find rooms around you",
                "Ikeja, Lagos",
                "Elebu estate, Ibadan",
                "Gbagada, Lagos",
                "Ajah, Lagos",
                "Apata, Ibadan",
              ].map((city: string) => (
                <SelectItem
                  key={city}
                  className="flex items-center space-x-2"
                  value={city}
                >
                  <MapPin className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
                  {city}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LocationSelect;
