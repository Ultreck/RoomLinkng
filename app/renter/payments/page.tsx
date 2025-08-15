"use client";

import PaymentSubPage from "@/components/dashboard/PaymentSubPage";
import React, { Suspense } from "react";

const PaymentPage = () => {
  return (
    <Suspense>
      <PaymentSubPage />
    </Suspense>
  );
};

export default PaymentPage;
