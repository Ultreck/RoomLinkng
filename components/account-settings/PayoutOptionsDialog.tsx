import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import defaultIcon from "../../assets/icons/default-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import Image from "next/image";
import React, { SetStateAction } from "react";

type BankDetails = { bankName: string; accountNo: string; default: boolean; id: number };
type BankDetailsProps = BankDetails[];
type PayoutProps = {
  id: number;
  setBankInfo: React.Dispatch<SetStateAction<BankDetailsProps>>;
};

const PayoutOptionsDialog = ({ id, setBankInfo }: PayoutProps) => {

    
  const handleSetAsDefault = () => {
    setBankInfo((prev) =>
      prev.map((bank) => ({
        ...bank,
        default: bank.id === id,
      }))
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <PiDotsThreeOutlineVerticalFill />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" align="start">
        <DropdownMenuLabel className="hidden"></DropdownMenuLabel>
        <DropdownMenuItem>
          <button
            onClick={handleSetAsDefault}
            className="text flex items-center gap-2"
          >
            <Image src={defaultIcon} alt="default icon" />
            Choose as default
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="text flex items-center gap-2">
            <Image src={deleteIcon} alt="delete icon" />
            Delete account details
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PayoutOptionsDialog;
