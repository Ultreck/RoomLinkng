'use client'

import React from "react";
import ListingVerification from "./ListingVerification";
import useParamHook from "@/hooks/use-param-hook";
import SuccessPage from "../registrations/SuccessPage";

const VerificationMainPage = () => {
  const { mode } = useParamHook({ key: "verification" });
  console.log(mode);
  return (
    <div>
        {mode === "isSuccess"? 
        <SuccessPage title="We have received your submission and verification has begun. You will be notified when approved," subTitle="Congratulations! Listing Submitted" buttonText="Back to listing page" fallback="landlord/listing"  />
        :

      <ListingVerification />
    }
    </div>
  );
};

export default VerificationMainPage;
