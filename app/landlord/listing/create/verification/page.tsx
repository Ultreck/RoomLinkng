import VerificationMainPage from "@/components/listings/VerificationMainPage";
import React, { Suspense } from "react";

const ListingVerificationPage = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <VerificationMainPage />
      </Suspense>
    </div>
  );
};

export default ListingVerificationPage;
