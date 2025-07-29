import RegistrationSidebar from "@/components/registrations/RegistrationSidebar";
import React from "react";

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex p-5 w-full">
      <div className="text hidden md:block w-1/3 z-20">
        <RegistrationSidebar />
      </div>
      <div className="text w-full md:w-2/3">{children}</div>
    </div>
  );
};

export default RegisterLayout;
