import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Calendar, Bed, Search, Filter } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
const SearchBar = () => {
  return (
    <div className="w-full bg-white px-6 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Search Bar Container */}
        <div className="flex items-center space-x-5 ">
          {/* Filter Button */}
          <Button variant="ghost" size="icon" className="rounded-full border-2 h-14 w-14 shadow-lg">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>

        <div className="text flex bg-gray-100 border border-gray-300 rounded-full shadow-lg px-3 justify-between py-2 space-x-6">
          {/* Location Selector */}
          <div className="flex items-center space-x-2 px-4 py-2 border-r border-white bg-white rounded-full flex-1">
            <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <Select>
              <SelectTrigger className="border-none shadow-none p-0 h-auto focus:ring-0">
                <SelectValue placeholder="Where do you want to go" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lagos">Lagos</SelectItem>
                <SelectItem value="abuja">Abuja</SelectItem>
                <SelectItem value="ibadan">Ibadan</SelectItem>
                <SelectItem value="kano">Kano</SelectItem>
                <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Available From Date */}
          <div className="flex items-center space-x-2 px-4 py-2 border-r border-white bg-white rounded-full flex-1">
            <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <Select>
              <SelectTrigger className="border-none shadow-none p-0 h-auto focus:ring-0">
                <SelectValue placeholder="Available from" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
                <SelectItem value="custom">Custom Date</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Month Selector */}
          <div className="flex items-center space-x-2 px-4 py-2 border-r border-white bg-white rounded-full flex-1">
            <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <Select>
              <SelectTrigger className="border-none shadow-none p-0 h-auto focus:ring-0">
                <SelectValue placeholder="July, 2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan-2025">January, 2025</SelectItem>
                <SelectItem value="feb-2025">February, 2025</SelectItem>
                <SelectItem value="mar-2025">March, 2025</SelectItem>
                <SelectItem value="apr-2025">April, 2025</SelectItem>
                <SelectItem value="may-2025">May, 2025</SelectItem>
                <SelectItem value="jun-2025">June, 2025</SelectItem>
                <SelectItem value="jul-2025">July, 2025</SelectItem>
                <SelectItem value="aug-2025">August, 2025</SelectItem>
                <SelectItem value="sep-2025">September, 2025</SelectItem>
                <SelectItem value="oct-2025">October, 2025</SelectItem>
                <SelectItem value="nov-2025">November, 2025</SelectItem>
                <SelectItem value="dec-2025">December, 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rooms Selector */}
          <div className="flex items-center space-x-2 px-4 py-2 min-w-0 flex-1">
            <Bed className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <Select>
              <SelectTrigger className="border-none shadow-none p-0 h-auto focus:ring-0">
                <SelectValue placeholder="Rooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Room</SelectItem>
                <SelectItem value="2">2 Rooms</SelectItem>
                <SelectItem value="3">3 Rooms</SelectItem>
                <SelectItem value="4">4 Rooms</SelectItem>
                <SelectItem value="5+">5+ Rooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button className="bg-green-600 hover:bg-green-700 rounded-full h-12 w-12 p-0">
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

