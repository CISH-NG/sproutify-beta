import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Link from "next/link";

export default function AccountInfo() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[32px] font-semibold">Settings</h1>
        <Link href={"/dashboard/settings"}>
          <h1 className="text-[24px] text-[#4C2884] font-medium">Back</h1>
        </Link>
      </section>

      <section className="lg:w-[1022px] lg:h-[852px] flex justify-between shadow-lg p-10 border rounded-3xl mb-10">
        <form className="flex flex-col w-full">
          <div className="mb-5 flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[24px] font-normal text-[#1F1717]"
              >
                E-mail Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="achadow@gmail.com"
                className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
              />
            </div>
            <div className="flex gap-2 items-center ">
              <div className="w-[13px] h-[13px] rounded-full bg-[#E11F1F]"></div>
              <p className="text-[#A0A0A0] text-[16px]">
                Email attached to this account cannot be changed
              </p>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex flex-col">
              <label
                htmlFor="pnumber"
                className="text-[24px] font-normal text-[#1F1717]"
              >
                Phone Number
              </label>
              <br />
              <input
                type="tel"
                name="pnumber"
                id="pnumber"
                placeholder="+2348123456789"
                className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
              />
            </div>
          </div>

          <div className="mb-5">
            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="text-[24px] font-normal text-[#1F1717]"
              >
                Location
              </label>
              <br />
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Lagos, Nigeria"
                className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
              />
            </div>
          </div>

          <div className="mb-5">
            <div className="flex flex-col">
              <label
                htmlFor="industry"
                className="text-[24px] font-normal text-[#1F1717]"
              >
                Industry
              </label>
              <br />
              <input
                type="text"
                name="industry"
                id="industry"
                placeholder="Fashion"
                className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
              />
            </div>
          </div>

          <button className="border mt-10 w-[350px] h-[56px] mx-auto p-3 rounded-lg bg-[#4C2884] text-[#FFFFFF] text-center text-[24px]  flex items-center justify-center font-normal">
            Update
          </button>
        </form>
      </section>
    </DashboardLayout>
  );
}
