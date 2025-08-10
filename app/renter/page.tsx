"use client";

import React, { Suspense } from "react";
import RenterSubPage from "@/components/dashboard/RenterSubPage";
// Mock data for rooms

const RenterPage = () => {
  return (
    <Suspense fallback={null}>
      <RenterSubPage />
    </Suspense>
  );
};

export default RenterPage;
