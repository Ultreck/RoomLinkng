'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import donoughtIcon from "../../assets/icons/donought-icon.svg";
import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useState } from "react";

export default function PaymentOption() {
const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (text: string) => {
        setIsCopied(true);
        navigator.clipboard.writeText(text);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }
  return (
    <div className="">
      {/* Bank Transfer */}
      <Card className="">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Bank Transfer</CardTitle>
          <Image src={donoughtIcon} alt="donought icon" />
        </CardHeader>
        <CardContent className="p-0">
          <div className="text space-y-4">
            <div className="text p-6 space-y-4">
              <p className="text-sm text-[#474747]">
                This account expires in{" "}
                <span className="text-[#00A859] font-medium ">19:23</span> and
                can only be used for this transaction
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-7">
                <div className="flex justify-between">
                  <span className="text-gray-500">Account Name:</span>
                  <span className="font-medium">Remita Checkout -</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Account Number:</span>
                  <button onClick={() =>handleCopy("4577342765")} className="font-medium flex items-center gap-1">
                    4577342765
                    <Copy className="w-4 h-4 cursor-pointer text-gray-500" />
                  </button>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Bank Name:</span>
                  <span className="font-medium">Fidelity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Amount:</span>
                  <span className="font-medium">NGN 5,000</span>
                </div>
              </div>
              {isCopied && 
              <div className="text-green-600 w-full rounded-lg text-sm bg-green-200/40 py-3 px-4 ">Account number is copied</div>
              }
              <p className="text-red-500 text-xs flex items-center gap-1">
                <IoIosInformationCircleOutline className="" /> Please make a transfer to the account details below.
              </p>
            </div>
            <div className="text border-t p-6 gap-2 flex items-center">
              <h1 className="text-lg font-semibold">Credit or debit card</h1>
              <Badge
                variant="secondary"
                className="bg-[#B9F4D8] text-[#00A859]"
              >
                Coming soon
              </Badge>
            </div>
            <div className="text px-6">
              <Button className="w-full cursor-pointer bg-[#3F7C5F] h-12 hover:bg-green-700">
                I have made payment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
