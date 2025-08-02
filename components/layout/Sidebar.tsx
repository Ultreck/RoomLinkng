"use client";

import {
  Home,
  ClipboardList,
  Wallet,
  Mail,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { BookText } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../assets/images/RoomLinkNG.png";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  
  const menuItems = [
    { label: "Dashboard", icon: <Home size={18} />, path: "/landlord" },
    {
      label: "Listings",
      icon: <ClipboardList size={18} />,
      path: "/landlord/listing",
    },
    {
      label: "Bookings",
      icon: <BookText size={18} />,
      path: "/landlord/booking",
    },
    {
      label: "Payments",
      icon: <Wallet size={18} />,
      path: "/landlord/payments",
    },
    {
      label: "Messages",
      icon: <Mail size={18} />,
      path: "/landlord/messages",
      badge: 12,
    },
  ];

  return (
    <div className="max-h-screen h-screen fixed w-60 bg-white border-r flex flex-col justify-between">
      <div className="w-full px-5 h-full mt-5">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
              className="inline-block mr-2"
            />
          </h1>
        </div>
        <div className="text flex flex-col  mt-12 justify-between">
          <h1 className="text-gray-400">MENU</h1>
          <nav className="space-y-3">
            {menuItems.map((item) => (
              <div
                key={item.label}
                onClick={() => router.push(item.path)}
                className={`flex items-center cursor-pointer p-1 ${pathname === item?.path? "bg-gray-100" : ""} rounded hover:bg-gray-100`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs ml-5 w-5 h-5 flex justify-center items-center bg-green-700 text-white rounded-full px-2">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>
          <div className="space-y-3 text-sm text-gray-600 mt-16 ">
            <h1 className="text-gray-400">GENERAL</h1>
            {[
              { label: "Settings", icon: <Settings size={18}  />, path: "/landlord/settings" },
              { label: "Help", icon: <HelpCircle size={18} />, path: "/landlord/help"},
              { label: "Logout", icon: <LogOut size={18} />},
            ].map((item) => (
              <div key={item.label} className="flex items-center cursor-pointer px-1 py-2 rounded hover:bg-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-800 text-white p-4 rounded-xl text-center text-sm">
        <div className="mb-2">
          <span className="font-bold text-lg">40%</span>
          <br />
          Complete profile to unlock full features
        </div>
        <button className="bg-white text-green-800 font-semibold px-3 py-1 rounded">
          Verify Identity
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
