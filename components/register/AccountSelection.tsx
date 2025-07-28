import React, { useState } from "react";

export default function AccountSelection() {
  const [selected, setSelected] = useState<"landlord" | "renter" | null>("landlord");

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Panel */}
      <div className="bg-green-700 text-white p-8 flex flex-col justify-between rounded-tr-3xl rounded-br-3xl">
        <div>
          <h1 className="text-3xl font-bold mb-4">Start your journey with us.</h1>
          <p className="text-sm">Become a landlord that earns and a renter with ease by using RoomLinkNG.</p>
        </div>
        <div className="bg-green-800 p-4 rounded-xl mt-6 shadow-md">
          <p className="text-sm mb-3">I started using RoomLink some weeks ago and as a landlord who travels out consistently, I was able to earn with ease.</p>
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Abraham John"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-sm">Abraham John</p>
              <p className="text-xs">Landlord</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-white p-10 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Who are you?</h2>
          <p className="text-sm text-gray-500 mb-4">
            To begin this journey, tell us what type of account you are creating. <br />
            Have an account? <a href="#" className="text-green-700 font-medium">Login</a>
          </p>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              onClick={() => setSelected("landlord")}
              className={`cursor-pointer border rounded-lg p-6 flex flex-col items-center gap-2 text-center transition-all ${selected === "landlord" ? "bg-green-50 border-green-600" : "hover:bg-gray-50"}`}
            >
              <div className="text-2xl">🏠</div>
              <p className="font-semibold">A Landlord</p>
              <p className="text-xs text-gray-500">Put up available rooms to rent</p>
            </div>
            <div
              onClick={() => setSelected("renter")}
              className={`cursor-pointer border rounded-lg p-6 flex flex-col items-center gap-2 text-center transition-all ${selected === "renter" ? "bg-green-50 border-green-600" : "hover:bg-gray-50"}`}
            >
              <div className="text-2xl">🏡</div>
              <p className="font-semibold">A Renter</p>
              <p className="text-xs text-gray-500">Put up available rooms to rent</p>
            </div>
          </div>

          <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
