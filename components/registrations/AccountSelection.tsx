"use client";

import React, { useState } from "react";
import renterIcon from "../../assets/icons/renter-icon.svg";
import landlordIcon from "../../assets/icons/landlord-icon.svg";
import Image from "next/image";

type AccountSelectionProps = {
  handleNext: () => void;
};

export default function AccountSelection({handleNext}: AccountSelectionProps) {
  const [selected, setSelected] = useState<"landlord" | "renter" | null>(
    "landlord"
  );

  return (
    <div className="h-[95vh] mx-auto w-full p-10 flex flex-col justify-center">
      {/* Right Panel */}
      <div className="bg-white mx-auto full flex flex-col justify-center h-full">
        <div className="w-full">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Who are you?</h2>
          <p className="text-sm text-gray-500 mb-4">
            To begin this journey, tell us what type of account you are
            creating. <br />
            Have an account?{" "}
            <a href="#" className="text-green-700 font-bold">
              Login
            </a>
          </p>

          {/* Options */}
          <div className="grid mt-10 grid-cols-2 gap-4 mb-6">
            <div
              onClick={() => setSelected("landlord")}
              className={`cursor-pointer h-[250px] w-[280px] border rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-center transition-all ${
                selected === "landlord"
                  ? "bg-[#F3FFEB] border-[#004A27]"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="text-2xl">
                <Image
                  src={landlordIcon}
                  alt="Landlord Icon"
                  width={50}
                  height={50}
                />
              </div>
              <p className="font-semibold">A Landlord</p>
              <p className="text-xs text-gray-500">
                Put up available rooms to rent
              </p>
            </div>
            <div
              onClick={() => setSelected("renter")}
              className={`cursor-pointer h-[250px] w-[280px] border rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-center transition-all ${
                selected === "renter"
                  ? "bg-[#F3FFEB] border-[#004A27]"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="text-2xl">
                <Image
                  src={renterIcon}
                  alt="Renter Icon"
                  width={50}
                  height={50}
                />
              </div>
              <p className="font-semibold">A Renter</p>
              <p className="text-xs text-gray-500">
                Put up available rooms to rent
              </p>
            </div>
          </div>

          <button onClick={handleNext} className="w-full h-14 mt-10 bg-[#3F7C5F] text-white py-3 rounded-lg font-semibold hover:bg-[#36624D] transition">
            Continue
          </button>
          
        </div>
      </div>
    </div>
  );
}
