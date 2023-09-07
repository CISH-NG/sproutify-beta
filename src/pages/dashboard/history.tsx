import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dashboardicon from "@/assets/svg/dashboardicon.svg";
import Invoice from "@/assets/svg/Invoice.svg";

export default function history() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[32px] font-semibold">History</h1>
        <Link href={"/dashboard"}>
          <h1 className="text-[24px] text-[#4C2884] font-medium">Back</h1>
        </Link>
      </section>

      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[24px] font-semibold text-[#706f6f]">
          A run through of all your activities on Sproutify
        </h1>
      </section>

      <div className="lg:w-[1022px] h-[80px] hover:bg-[#4C2884] hover:text-[#FFFFFF] shadow-lg border mt-2 p-5 flex justify-between mx-auto mb-6 rounded-xl">
        <div className="flex gap-10">
          <div className="w-[40px] h-[40px] flex items-center bg-[#FEC431] justify-center border rounded-full">
            <Image src={Invoice} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] font-medium ">New Invoice</h1>
            <p className="text-[12px] font-normal text-[#A0A0A0]">
              Created new invoice for a client
            </p>
          </div>
        </div>
        <div>
          <p>01 - 08 - 2023</p>
        </div>
      </div>

      <div className="lg:w-[1022px] h-[80px] shadow-lg border hover:bg-[#4C2884] hover:text-[#FFFFFF] p-5 flex justify-between mx-auto mb-6 rounded-xl">
        <div className="flex gap-10">
          <div className="w-[40px] h-[40px] flex items-center bg-[#41ABE7] justify-center border rounded-full">
            <Image src={dashboardicon} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] font-medium ">Creative Designs</h1>
            <p className="text-[12px] font-normal text-[#A0A0A0]">
              Your scheduled designs for the month are all available
            </p>
          </div>
        </div>

        <div>
          <p>01 - 08 - 2023</p>
        </div>
      </div>

      <div className="lg:w-[1022px] h-[80px] hover:bg-[#4C2884] hover:text-[#FFFFFF] shadow-lg border mt-2 p-5 flex justify-between mx-auto mb-6 rounded-xl">
        <div className="flex gap-10">
          <div className="w-[40px] h-[40px] flex items-center bg-[#FEC431] justify-center border rounded-full">
            <Image src={Invoice} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] font-medium ">New Invoice</h1>
            <p className="text-[12px] font-normal text-[#A0A0A0]">
              Created new invoice for a client
            </p>
          </div>
        </div>
        <div>
          <p>01 - 08 - 2023</p>
        </div>
      </div>

      <div className="lg:w-[1022px] h-[80px] shadow-lg border hover:bg-[#4C2884] hover:text-[#FFFFFF] p-5 flex justify-between mx-auto mb-6 rounded-xl">
        <div className="flex gap-10">
          <div className="w-[40px] h-[40px] flex items-center bg-[#41ABE7] justify-center border rounded-full">
            <Image src={dashboardicon} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] font-medium ">Creative Designs</h1>
            <p className="text-[12px] font-normal text-[#A0A0A0]">
              Your scheduled designs for the month are all available
            </p>
          </div>
        </div>

        <div>
          <p>01 - 08 - 2023</p>
        </div>
      </div>

      <div className="lg:w-[1022px] h-[80px] hover:bg-[#4C2884] hover:text-[#FFFFFF] shadow-lg border mt-2 p-5 flex justify-between mx-auto mb-6 rounded-xl">
        <div className="flex gap-10">
          <div className="w-[40px] h-[40px] flex items-center bg-[#FEC431] justify-center border rounded-full">
            <Image src={Invoice} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] font-medium ">New Invoice</h1>
            <p className="text-[12px] font-normal text-[#A0A0A0]">
              Created new invoice for a client
            </p>
          </div>
        </div>
        <div>
          <p>01 - 08 - 2023</p>
        </div>
      </div>

      <div className="lg:w-[1022px] h-[80px] shadow-lg border hover:bg-[#4C2884] hover:text-[#FFFFFF] p-5 flex justify-between mx-auto mb-6 rounded-xl">
        <div className="flex gap-10">
          <div className="w-[40px] h-[40px] flex items-center bg-[#41ABE7] justify-center border rounded-full">
            <Image src={dashboardicon} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] font-medium ">Creative Designs</h1>
            <p className="text-[12px] font-normal text-[#A0A0A0]">
              Your scheduled designs for the month are all available
            </p>
          </div>
        </div>

        <div>
          <p>01 - 08 - 2023</p>
        </div>
      </div>

      <div className="lg:w-[1022px] h-[80px] hover:bg-[#4C2884] hover:text-[#FFFFFF] shadow-lg border mt-2 p-5 flex justify-between mx-auto mb-6 rounded-xl">
        <div className="flex gap-10">
          <div className="w-[40px] h-[40px] flex items-center bg-[#FEC431] justify-center border rounded-full">
            <Image src={Invoice} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] font-medium ">New Invoice</h1>
            <p className="text-[12px] font-normal text-[#A0A0A0]">
              Created new invoice for a client
            </p>
          </div>
        </div>
        <div>
          <p>01 - 08 - 2023</p>
        </div>
      </div>

      <div className="lg:w-[1022px] h-[80px] shadow-lg border hover:bg-[#4C2884] hover:text-[#FFFFFF] p-5 flex justify-between mx-auto mb-6 rounded-xl">
        <div className="flex gap-10">
          <div className="w-[40px] h-[40px] flex items-center bg-[#41ABE7] justify-center border rounded-full">
            <Image src={dashboardicon} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] font-medium ">Creative Designs</h1>
            <p className="text-[12px] font-normal text-[#A0A0A0]">
              Your scheduled designs for the month are all available
            </p>
          </div>
        </div>

        <div>
          <p>01 - 08 - 2023</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
