import React from "react";
import { Button } from "../ui/button";
import successIcon from "../../assets/icons/success_iconsvg.svg";
import Image from "next/image";
import useParamHook from "@/hooks/use-param-hook";


type successType = {
  title: string;
};
const SuccessPage = ({ title }: successType) => {
const {handleSearchParams} = useParamHook();
  

  return (
    <div className="mt-20">
      <div className="text flex justify-center flex-col h-[70vh] items-center w-full">
        <div className="text w-1/2  mx-auto">
          <div className="text flex justify-center items-center">
            <Image
              src={successIcon}
              width={150}
              height={150}
              alt={"Complete icon"}
            />
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold">Good to go!</h1>
            <p className="text-gray-600">{title}</p>
          </div>
          <Button
          onClick={() => handleSearchParams("login")}
            className="bg-[#3F7C5F] mt-10 hover:bg-[#36624D] w-full h-14 "
            type="submit"
          >
            Back to log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
