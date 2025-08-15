'use client'

import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import PaymentOption from "../booking-payments/PaymentOption";
import BookingSummary from "../booking-payments/BookingSummary";
import useParamHook from "@/hooks/use-param-hook";
import SuccessPage from "../registrations/SuccessPage";

const PaymentSubPage = () => {
  const router = useRouter();
  const { mode } = useParamHook({ key: "paid" });
  console.log(mode);
  const propertyDetails = {
    name: "Tropic flat villa",
    date: "Jul 30 - Aug 30, 2025.",
  };

  return (
    <div className="text">
      {mode ? (
        <div className="tex">
          <SuccessPage
            title="Congratulations! You've made your first booking!"
            subTitle={`You have booked ${propertyDetails.name} from ${propertyDetails.date}`}
            fallback="renter"
            buttonText="Back to home page"
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto md:px-10 py-4 space-y-4">
          <div className="p-6 mx-auto">
            <button
              onClick={() => router.back()}
              className="hover:underline text-gray-600 flex items-center gap-1"
            >
              <IoChevronBackOutline />
              Back
            </button>{" "}
            <h1 className="text-xl font-semibold mb-6">
              Select a Payment Option
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
              <div className="md:col-span-3">
                <Suspense fallback={null}>
                  <PaymentOption />
                </Suspense>
              </div>
              <div className="md:col-span-2">
                <BookingSummary />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSubPage;
