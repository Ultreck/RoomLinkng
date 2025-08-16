import React from "react";
import PaymentTransactionCards from "./PaymentTransactionCards";
import PaymentTabs from "./PaymentTabs";

const TransactionMainPage = () => {
  return (
    <div className="space-y-5 mt-10">
      <div className="text">
        <h1 className="text-[#474747] font-medium text-[26px]">Payments</h1>
        <span className="text-[16px] text-[#474747] ">
          Guess how much you’ve earned so far?
        </span>
      </div>
      <PaymentTransactionCards />
      <PaymentTabs />
    </div>
  );
};

export default TransactionMainPage;
