import React from "react";



type PaymentStatus = "Successful" | "In progress" | "Cancelled";

const statusColors: Record<PaymentStatus, string> = {
  Successful: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
  'In progress': "bg-yellow-100 text-yellow-800",
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
const PaymentsBiggerScreenTableRow = ({ data }: PaymentTableProps) => {
  return (
    <tr
      key={data.id}
      className="hover:bg-gray-100  transition-colors duration-150"
    >
      <td className="py-4 lg:px-2 px-1 text-xs md:text-base flex items-center space-x-2">
        {data.transactionId}
      </td>
      <td className="py-4 lg:px-2 px-1 text-xs md:text-base">{data.recipient}</td>
      <td className="py-4 lg:px-2 px-1 text-xs md:text-base">{data.amount}</td>
      <td className="py-4 lg:px-2 px-1 text-xs md:text-base">{data.date}</td>
   
      <td className="py-4 lg:px-2 px-1 text-xs md:text-base">
        <span
          className={`px-2 py-1 rounded text-xs md:text-base font-medium ${
            statusColors[data.status]
          }`}
        >
          {data.status}
        </span>
      </td>
    </tr>
  );
};

export default PaymentsBiggerScreenTableRow;
