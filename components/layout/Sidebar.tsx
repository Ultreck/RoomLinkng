'use client'

import { Home, ClipboardList, Wallet, Mail, Settings, HelpCircle, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Sidebar = () => {
  const router = useRouter()
  const menuItems = [
    { label: "Dashboard", icon: <Home />, path: "/dashboard" },
    { label: "Listings", icon: <ClipboardList />, path: "/listings" },
    { label: "Bookings", icon: <ClipboardList />, path: "/bookings" },
    { label: "Payments", icon: <Wallet />, path: "/payments" },
    { label: "Messages", icon: <Mail />, path: "/messages", badge: 12 },
  ]

  return (
    <div className="h-screen w-60 bg-white border-r flex flex-col justify-between p-4">
      <div>
        <h1 className="text-xl font-bold mb-6 text-green-700">RoomLink<span className="text-orange-500">NG</span></h1>
        <nav className="space-y-3">
          {menuItems.map(item => (
            <div key={item.label} onClick={() => router.push(item.path)} className="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-gray-100">
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && <span className="text-xs bg-green-700 text-white rounded-full px-2">{item.badge}</span>}
            </div>
          ))}
        </nav>
        <div className="mt-8 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2 cursor-pointer"><Settings size={18} /> Settings</div>
          <div className="flex items-center gap-2 cursor-pointer"><HelpCircle size={18} /> Help</div>
          <div className="flex items-center gap-2 cursor-pointer text-red-500"><LogOut size={18} /> Logout</div>
        </div>
      </div>

      <div className="bg-green-800 text-white p-4 rounded-xl text-center text-sm">
        <div className="mb-2">
          <span className="font-bold text-lg">40%</span><br />
          Complete profile to unlock full features
        </div>
        <button className="bg-white text-green-800 font-semibold px-3 py-1 rounded">Verify Identity</button>
      </div>
    </div>
  )
}

export default Sidebar
