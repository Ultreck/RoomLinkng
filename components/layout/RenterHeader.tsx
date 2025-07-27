import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Mail } from 'lucide-react';

const RenterHeader = () => {
  return (
    <header className="w-full bg-white px-6 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            RoomLink<span className="text-orange-500">NG</span>
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-2 border rounded-full p-2">
          <Button variant="ghost" className="text-gray-600 rounded-full bg-gray-100 hover:text-gray-900">
            Explore
          </Button>
          <Button variant="ghost" className="text-gray-600 rounded-full hover:text-gray-900">
            Wishlist
          </Button>
          <Button variant="ghost" className="text-gray-600 rounded-full hover:text-gray-900">
            Account Settings
          </Button>
          <Button variant="ghost" className="text-gray-600 rounded-full hover:text-gray-900">
            Help Center
          </Button>
          <Button variant="ghost" className="text-red-500 rounded-full hover:text-red-700">
            Log out
          </Button>
        </nav>

        {/* Right side - Message icon and User profile */}
        <div className="flex items-center space-x-4">
          {/* Message Icon */}
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
            <Mail className="h-5 w-5" />
          </Button>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/api/placeholder/32/32" alt="Gladys Adediji" />
                  <AvatarFallback>GA</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-gray-900">Gladys Adediji</p>
                  <p className="text-xs text-gray-500">gladysade10@gmail.com</p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default RenterHeader;

