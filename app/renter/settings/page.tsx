"use client";

import React, { useState } from "react";

import { User, Shield, Lock, Eye } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import profileIcon from "../../../assets/icons/profile-icon.svg";
import securityIcon from "../../../assets/icons/security.svg";
import verityIcon from "../../../assets/icons/verify.svg";
import passwordIcon from "../../../assets/icons/password.svg";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PrivacySetting from "@/components/account-settings/PrivacySetting";
import PasswordSetting from "@/components/account-settings/PasswordSetting";
import KycSetting from "@/components/account-settings/KycSetting";
import ProfileSetting from "@/components/account-settings/ProfileSetting";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  fullname: z
    .string()
    .min(3, { message: "Full name should be at least 3 characters long" }),
  phone: z
    .string()
    .min(11, { message: "Phone number should be at least 11 characters long" }),
  nin: z.instanceof(File).optional(),
  address: z
    .string()
    .min(5, { message: "Address should at least be 5 letter words" }),
  birthdate: z.string({ message: "Birthdate is required" }),
});
export type SettingFormValues = z.infer<typeof formSchema>;
function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [editingField, setEditingField] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "Gladys Abelle",
      email: "g***@gmail.com",
      phone: "090***98809",
      nin: undefined,
      address: "",
      birthdate: "MM/YY/YYYY",
    },
  });

  const sidebarItems = [
    { id: "profile", url: profileIcon, label: "Profile", icon: User },
    { id: "kyc", url: verityIcon, label: "KYC", icon: Shield },
    { id: "password", url: passwordIcon, label: "Password", icon: Lock },
    { id: "privacy", url: securityIcon, label: "Privacy", icon: Eye },
  ];

  interface EditHandler {
    (field: string): void;
  }

  const handleEdit: EditHandler = (field) => {
    setEditingField(field);
  };

  interface HandleSave {
    (field: string): void;
  }

  const handleSave: HandleSave = (field) => {
    setEditingField(undefined);
    console.log(field);
  };

  const handleCancel = () => {
    setEditingField(undefined);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    console.log(data);
    console.log(isLoading);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <ProfileSetting
            form={form}
            onSubmit={onSubmit}
            editingField={editingField}
            handleCancel={handleCancel}
            handleEdit={handleEdit}
            handleSave={handleSave}
          />
        );
      case "kyc":
        return <KycSetting />;
      case "password":
        return <PasswordSetting />;
      case "privacy":
        return <PrivacySetting />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen mt-16 bg-white">
      <div className="md:flex md:max-w-[70%] mx-auto sm:p-5">
        {/* Sidebar */}
        <div className="bg-white px-5 md:border-r md:min-h-screen">
          <div className="w-full">
            <h1 className="pl-4 text-[24px] font-semibold text-[#474747] mb-6">
              Settings
            </h1>
            <nav className="space-y-1 sm:space-x-5 md:space-x-0 border-b md:border-b-0 flex md:grid justify-evenly">
              {sidebarItems.map((item) => {
                // const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`sm:w-48 flex items-center sm:space-x-3 px-3 sm:py-2 py-1 rounded-full text-left transition-all duration-200 ${
                      activeTab === item.id ? "bg-[#F6F6F6] font-semibold" : ""
                    }`}
                  >
                    <Image
                      src={item.url}
                      alt={item.id}
                      className={`h-5 hidden sm:block w-5`}
                    />
                    <span className="">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white mt-8">
          <Card className="max-w-2xl gap-0 bg-white shadow-none border-0 p-0">
            <CardHeader className="bg-white border-0 "></CardHeader>
            <CardContent className="">{renderContent()}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AccountSettingsPage;
