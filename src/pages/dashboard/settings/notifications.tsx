import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Link from "next/link";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

export default function Notifications() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[32px] font-semibold">Settings</h1>
        <Link href={"/dashboard/settings"}>
          <h1 className="text-[24px] text-[#4C2884] font-medium">Back</h1>
        </Link>
      </section>

      <section className="lg:w-[1022px] lg:h-[320px] flex flex-col shadow-lg p-10 border rounded-3xl mb-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className=" text-[24px] font-normal">
              Turn on/off email notifications
            </h1>
            <div className="flex gap-2 items-center ">
              <div className="w-[13px] h-[13px] rounded-full bg-[#E11F1F]"></div>
              <p className="text-[#A0A0A0] text-[16px]">
                Email notifications help you receive sproutify notifications
                directly to your email address
              </p>
            </div>
          </div>
          <ToggleSwitch />
        </div>
        <button className="border mt-20 w-[350px] h-[56px] mx-auto p-3 rounded-lg bg-[#4C2884] text-[#FFFFFF] text-center text-[24px]  flex items-center justify-center font-normal">
          Update
        </button>
      </section>
    </DashboardLayout>
  );
}
