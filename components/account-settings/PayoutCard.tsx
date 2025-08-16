'use client'

import React, { useState } from "react";
import { Badge } from "../ui/badge";
import PayoutOptionsDialog from "./PayoutOptionsDialog";
import houseIcon from "../../assets/icons/acc-icon.svg";
import Image from "next/image";
import useParamHook from "@/hooks/use-param-hook";

type bankDetailsProps = {
  bankName: string;
  accountNo: string;
  default: boolean;
  id: number;
}[];
const bankDetails: bankDetailsProps = [
  {
    id: 1,
    bankName: "UNITED BANK FOR AFRICA PLC",
    default: false,
    accountNo: "9389122823",
  },
  {
    id: 2,
    bankName: "GUARANTEE TRUST BANK",
    default: false,
    accountNo: "9389120021",
  },
  {
    id: 3,
    bankName: "GUARANTEE TRUST BANK",
    default: false,
    accountNo: "9389121982",
  },
];

const PayoutCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [bankInfo, setBankInfo] = useState<bankDetailsProps>(bankDetails);
  const {handleSearchParams} = useParamHook();
  return (
    <div className="text-sm text-muted-foreground">
      <div className="text flex items-center justify-between">
        <h1 className="text-[#474747] font-medium text-[20px]">
          How you&apos;ll get paid
        </h1>
        <button onClick={() => handleSearchParams("Add new bank account details in payout section", "payout")} className="rounded-full text-white cursor-pointer bg-[#474747] hover:bg-gray-600 px-5 py-2 ">
          Add Account
        </button>
      </div>
      <p className="text-[#474747] mt-5">
        To ensure fairness and protect both landlords and renters, payments are
        made in parts based on the net amount (after Roomlink&apos;s commission
        has been deducted){" "}
        {!expanded && (
          <button
            className="text-green-600 cursor-pointer font-medium hover:underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Collapse" : "Read more"}
          </button>
        )}
      </p>
      <div className="text flex items-end">
        {expanded && (
          <div className="text-[#474747] space-y-1 mt-4">
            <p className="tex mb-2">
              Example 1 - For one month stay , if the net payout is N50,000
            </p>
            <p className="tex">
              Day 14: Landlord receives N25,000 (50% of 50,000)
            </p>
            <p className="tex">Day 30: Landlord receives N25,000</p>
            <p className="tex my-3">
              Example 2 - For 4 months stay , if the net payout is N200,000
            </p>
            <p className="tex">
              Day 14: Landlord receives N100,000 (50% of N200,000)
            </p>
            <p className="tex">Day 30: Landlord receives N25,000</p>
            <p className="tex">End of month 2: Landlord receives N25,000</p>
            <p className="tex">nEd of month 3: Landlord receives N25,000 </p>
            <p className="tex">
              End of month 4: Landlord receives N25,000{" "}
              <button
                className="text-green-600 cursor-pointer font-medium hover:underline"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Collapse" : "Read more"}
              </button>
            </p>
          </div>
        )}
      </div>
      <div className="text">
        {bankInfo.map((bank) => (
          <div
            key={bank.accountNo}
            className="text flex justify-between items-center"
          >
            <div className="text flex gap-3 mt-7 items-center">
              <span className="text">
                <Image src={houseIcon} alt="house icon" />
              </span>
              {bank.bankName}
              <span className="text">•••• {bank.accountNo.slice(6, 10)}</span>

              {bank.default && (
                <Badge className="bg-[#F4F4F4] text-black">Default</Badge>
              )}
            </div>
            <div className="text">
              <PayoutOptionsDialog setBankInfo={setBankInfo} id={bank.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayoutCard;
