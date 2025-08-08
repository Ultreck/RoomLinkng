'use client'

import BookingSummary from "@/components/booking-payments/BookingSummary";
import PaymentOption from "@/components/booking-payments/PaymentOption";
import { useRouter } from "next/navigation";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const PaymentPage = () => {
  const router = useRouter()
  return (
    <div className="max-w-7xl mx-auto mt-10 md:px-10 px-4 py-6 space-y-6">
      <div className="p-6 mx-auto">
        <button
           onClick={() => router.back()}
          className="hover:underline text-gray-600 flex items-center gap-1"
        >
          <IoChevronBackOutline />
          Back
        </button>{" "}
        <h1 className="text-xl font-semibold mb-6">Select a Payment Option</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="md:col-span-3">
            <PaymentOption />
          </div>
          <div className="md:col-span-2">
            <BookingSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
