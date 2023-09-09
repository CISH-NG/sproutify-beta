import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Link from "next/link";

export default function ChangePassword() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[32px] font-semibold">Settings</h1>
        <Link href={"/dashboard/settings"}>
          <h1 className="text-[24px] text-[#4C2884] font-medium">Back</h1>
        </Link>
      </section>
      <section className="lg:w-[1022px] lg:h-[743px] flex justify-between shadow-lg p-10 border rounded-3xl mb-10">
        <form className="flex flex-col w-full">
          <div className="mb-5">
            <div className="flex flex-col">
              <label
                htmlFor="pword"
                className="text-[24px] font-normal text-[#1F1717]"
              >
                Current Password
              </label>
              <br />
              <input
                type="password"
                name="pword"
                id="pword"
                placeholder="**********"
                className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
              />
            </div>
          </div>

          <div className="mb-5">
            <div className="flex flex-col">
              <label
                htmlFor="pword"
                className="text-[24px] font-normal text-[#1F1717]"
              >
                New Password
              </label>
              <br />
              <input
                type="password"
                name="pword"
                id="pword"
                placeholder="**********"
                className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="pword"
                className="text-[24px] font-normal text-[#1F1717]"
              >
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                name="pword"
                id="pword"
                placeholder="**********"
                className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
              />
            </div>
            <div className="flex gap-2 items-center ">
              <div className="w-[13px] h-[13px] rounded-full bg-[#E11F1F]"></div>
              <p className="text-[#A0A0A0] text-[16px]">
                Password change instantly logs out the user and will require
                re-entry with the new password
              </p>
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
