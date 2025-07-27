

export default function Dashboard() {
  return (
    <div className="flex max-w-8xl">
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-6">List your rooms and receive bookings with ease.</p>

          {/* Cards Section */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Total Listings</p>
              <h2 className="text-xl font-bold">10</h2>
              <p className="text-green-500 text-xs">2% increased from last month</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Total Payouts</p>
              <h2 className="text-xl font-bold">₦90k</h2>
              <p className="text-green-500 text-xs">15% increased from last month</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Pending Listings</p>
              <h2 className="text-xl font-bold">3</h2>
              <p className="text-orange-500 text-xs">In review</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Monthly Bookings</p>
              <div className="flex items-end gap-2 h-16 mt-2">
                <div className="bg-black h-4 w-4 rounded-sm" />
                <div className="bg-orange-500 h-6 w-4 rounded-sm" />
                <div className="bg-green-600 h-2 w-4 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Booking History & Messages would go here */}
        </main>
    </div>
  )
}
