"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaBars } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  ClipboardList,
  Wallet,
  Mail,
  Settings,
  HelpCircle,
  LogOut,
  //   LucideIcon,
  BookText,
} from "lucide-react";
import logo from "../../assets/images/RoomLinkNG.png";
import Image from "next/image";
import CompleteProfileCard from "../CompleteProfileCard";
const SmallerScreenSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

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

  const subMenuItems = [
    {
      label: "Settings",
      icon: <Settings size={18} />,
      path: "/landlord/settings",
    },
    {
      label: "Help",
      icon: <HelpCircle size={18} />,
      path: "/landlord/help",
    },
    { label: "Logout", path: "/", icon: <LogOut size={18} /> },
  ];
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <FaBars />
      </DrawerTrigger>
      <DrawerContent>
          <div className="max-h-screen w-full h-screen fixed bg-[#F6F6F6] border-r flex flex-col justify-between">
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
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <div
                      key={item.label}
                      onClick={() => router.push(item.path)}
                      className={`flex items-center cursor-pointer px-1 py-2 ${
                        pathname === item?.path ||
                        pathname.split("/").includes((item?.path).split("/")[2])
                          ? "bg-gray-200 border-l-4 border-green-600"
                          : ""
                      } rounded hover:bg-gray-200`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-xs ml-5 w-5 h-5 flex justify-center items-center bg-green-700 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="space-y-3 text-sm text-gray-600 mt-10 ">
                  <h1 className="text-gray-400">GENERAL</h1>
                  {subMenuItems.map((item) => (
                    <div
                      key={item.label}
                      onClick={() => router.push(item.path)}
                      className={`flex items-center cursor-pointer ${
                        pathname === item?.path
                          ? "bg-gray-200 border-l-4 border-green-600"
                          : ""
                      } px-1 py-2 rounded hover:bg-gray-200`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text relative mt-2">
                  <CompleteProfileCard progress={40} />
                </div>
              </div>
            </div>
          </div>
        <DrawerHeader>
          <DrawerTitle className="hidden">Are you absolutely sure?</DrawerTitle>
          <DrawerDescription className="hidden"></DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default SmallerScreenSidebar;
