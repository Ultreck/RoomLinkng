import React from "react";

type PaymentStatus = "Successful" | "In progress" | "Cancelled";

const statusColors: Record<PaymentStatus, string> = {
  Successful: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
  "In progress": "bg-yellow-100 text-yellow-800",
};
export type PaymentTableProps = {
  data: {
    id: number;
    transactionId: string;
    recipient: string;
    amount: string;
    date: string;
    status: PaymentStatus;
  };
};
const PaymentSmallerScreenTable = ({ data }: PaymentTableProps) => {
  return (
    <div
      key={data.id}
      className="bg-white rounded-lg  border border-gray-300 pl-4"
    >
      <div className="flex justify-between pr-4 py-7 items-center border-b h-[40px]">
        <span className="text-[#252C32] text-[16px]">Transaction ID</span>
        <span className="font-semibold flex items-center">{data.transactionId}</span>
      </div>
      <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
        <span className="text-[#252C32] text-[16px]">Recipient name</span>
        <span>{data.recipient}</span>
      </div>
      <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
        <span className="text-[#252C32] text-[16px]">Amount paid</span>
        <span>{data.amount}</span>
      </div>
      <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
        <span className="text-[#252C32] text-[16px]">Date</span>
        <span>{data.date}</span>
      </div>
      <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
        <span className="text-[#252C32] text-[16px]">Status</span>
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            statusColors[data.status]
          }`}
        >
          {data.status}
        </span>
      </div>
    </div>
  );
};

export default PaymentSmallerScreenTable;
