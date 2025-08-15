import TopNav from "@/components/layout/TopNav";
import ListingMainPage from "@/components/listings/ListingMainPage";
import React, { Suspense } from "react";

const ListingPage = () => {
  return (
    <div className="mx-auto">
      <Suspense fallback={null}>
        <TopNav />
        <ListingMainPage />
      </Suspense>
    </div>
  );
};

export default ListingPage;
