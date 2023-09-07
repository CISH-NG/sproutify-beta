import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Frame271 from "@/assets/images/Frame271.png";
import MyCalendar from "@/components/Calendar/Calendar";

export default function Calendar() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[32px] font-semibold">Holiday Calendar</h1>
        <Link href={"/dashboard"}>
          <h1 className="text-[24px] text-[#4C2884] font-medium">Back</h1>
        </Link>
      </section>

      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[24px] font-semibold text-[#706f6f]">
          Stay updated with important holidays
        </h1>
      </section>

      <section className="flex justify-between mb-10 gap-3 ">
        <div className="lg:w-[474px] lg:h-[380px] gap-6 p-4 justify-evenly bg-[#000000] mx-auto flex flex-col rounded-2xl text-[#FFFFFF] ">
          <div className="w-[90%] h-[78px] bg-[#1F1717] flex mx-auto p-4 items-center justify-between rounded-xl">
            <div className="flex gap-2">
              <div className="w-[32px] h-[32px] rounded-full">
                <Image src={Frame271} alt="" />
              </div>
              <p className="text-[18px] font-normal">Children&apos;s Day</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold">Sun 27 May</p>
            </div>
          </div>

          <div className="w-[90%] h-[78px] bg-[#1F1717] flex mx-auto p-4 items-center justify-between rounded-xl">
            <div className="flex gap-2">
              <div className="w-[32px] h-[32px] rounded-full">
                <Image src={Frame271} alt="" />
              </div>
              <p className="text-[18px] font-normal">Mother&apos;s Day</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold">Sun 27 May</p>
            </div>
          </div>

          <div className="w-[90%] h-[78px] bg-[#1F1717] flex mx-auto p-4 items-center justify-between rounded-xl">
            <div className="flex gap-2">
              <div className="w-[32px] h-[32px] rounded-full">
                <Image src={Frame271} alt="" />
              </div>
              <p className="text-[18px] font-normal">Independence Day</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold">Sun 27 May</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[500px] lg:h-[380px] flex flex-col shadow-lg border rounded-2xl py-4 ">
          <MyCalendar />
        </div>
      </section>
    </DashboardLayout>
  );
}
