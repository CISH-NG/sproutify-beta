import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Image from "next/image";
import Frame261 from "@/assets/images/Frame261.png";
import message from "@/assets/svg/message.svg";
import notificationwhite from "@/assets/svg/noification-white.png";
import Group191 from "@/assets/images/Group191.png";
import Rectangle17 from "@/assets/images/Rectangle17.png";
import dashboardicon from "@/assets/svg/dashboardicon.svg";
import websiteicon from "@/assets/svg/websiteicon.svg";
import Vector59 from "@/assets/svg/Vector59.svg";
import Invoice from "@/assets/svg/Invoice.png";
import invoice from "@/assets/svg/Invoice.svg";
import Frame271 from "@/assets/images/Frame271.png";

export default function index() {
  return (
    <>
      <DashboardLayout>
        <section className="lg:w-[1022px] flex justify-between mb-10">
          <div className="lg:w-[385px] lg:h-[80px]  bg-gradient-to-r from-[#4C2884] to-[#FEC431] rounded-xl flex justify-evenly items-center">
            <div className="w-[32px] h-[32px]">
              <Image src={Frame261} alt="" />
            </div>
            <p className="text-[24px] font-semibold">Contact Support</p>
            <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded-full flex items-center justify-center">
              <Image src={message} alt="" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-[40px] h-[40px] bg-[#4C2884] rounded-full flex items-center justify-center">
              <Image src={notificationwhite} alt="" />
            </div>
          </div>
        </section>

        <section className="relative lg:w-[1022px] lg:h-[210px] justify-center flex flex-col shadow-lg border mb-10">
          <div className="absolute top-0 right-0 w-[50px] h-[100px]">
            <Image src={Group191} alt="" />
          </div>
          <h1 className="text-[40px] text-[#1F1717] font-semibold ml-20">
            Welcome Sarah,
          </h1>
          <p className="w-[510px] text-[24px] font-normal text-[#A0A0A0] ml-20">
            The support team is incredibly responsive and always goes above and
          </p>
          <div className="absolute bottom-0 left-0 ">
            <Image src={Rectangle17} alt="" />
          </div>
        </section>

        <section className="flex justify-between mb-10 relative lg:w-[1022px]">
          <div className="w-[310px] h-[284px] bg-[#41ABE7] rounded-3xl p-10">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[28px] h-[78px] w-[119px] font-semibold text-[#FFFFFF]">
                Creative Designs
              </h1>
              <div className="w-[40px] h-[40px] flex items-center justify-center border rounded-full">
                <Image src={dashboardicon} alt="" />
              </div>
            </div>
            <div className="text-[40px] text-[#FFFFFF] font-semibold mb-4">
              10
            </div>

            <button className="border w-[215px] h-[48px] text-[24px] text-[#FFFFFF] font-semibold rounded-xl">
              {" "}
              See Designs
            </button>
          </div>

          <div className="w-[310px] h-[284px] bg-[#DE5753] rounded-3xl p-10">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[28px] h-[78px] w-[119px] font-semibold text-[#FFFFFF]">
                Personal Website
              </h1>
              <div className="w-[40px] h-[40px] flex items-center justify-center border rounded-full">
                <Image src={websiteicon} alt="" />
              </div>
            </div>
            <div className="text-[40px] text-[#FFFFFF] font-semibold mb-7">
              <Image src={Vector59} alt="" />
            </div>

            <button className="border w-[215px] h-[48px] text-[24px] text-[#FFFFFF] font-semibold rounded-xl">
              {" "}
              Get Website
            </button>
          </div>

          <div className="w-[310px] h-[284px] bg-[#FEC431] rounded-3xl p-10">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[28px] h-[78px] w-[119px] font-semibold text-[#FFFFFF]">
                Create Invoice
              </h1>
              <div className="w-[40px] h-[40px] flex items-center justify-center border rounded-full">
                <Image src={invoice} alt="" />
              </div>
            </div>
            <div className="text-[40px] text-[#FFFFFF] font-semibold mb-7">
              <Image src={Invoice} alt="" />
            </div>

            <button className="border w-[215px] h-[48px] text-[24px] text-[#FFFFFF] font-semibold rounded-xl">
              {" "}
              Get Website
            </button>
          </div>
        </section>

        <section className="relative lg:w-[1022px] justify-center gap-10 flex  mb-10">
          <div className="w-2/3 mt-2">
            <div className="flex justify-between items-center p-3">
              <h1 className="text-[24px] font-semibold">Recent History</h1>
              <p className="text-[#A0A0A0] text-[16px] font-semibold">
                See More
              </p>
            </div>
            <div className="w-[632px] h-[80px] shadow-lg border mt-2 p-5 flex justify-between mx-auto mb-6 rounded-xl">
              <div className="flex gap-10">
                <div className="w-[40px] h-[40px] flex items-center bg-[#FEC431] justify-center border rounded-full">
                  <Image src={invoice} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] font-medium">New Invoice</h1>
                  <p className="text-[12px] font-normal text-[#A0A0A0]">
                    Created new invoice for a client
                  </p>
                </div>
              </div>

              <div>
                <p>01 - 08 - 2023</p>
              </div>
            </div>
            <div className="w-[632px] h-[80px] shadow-lg border p-5 flex justify-between mx-auto mb-6 rounded-xl">
              <div className="flex gap-10">
                <div className="w-[40px] h-[40px] flex items-center bg-[#41ABE7] justify-center border rounded-full">
                  <Image src={dashboardicon} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] font-medium">Creative Designs</h1>
                  <p className="text-[12px] font-normal text-[#A0A0A0]">
                    Your scheduled designs for the month are all available
                  </p>
                </div>
              </div>

              <div>
                <p>01 - 08 - 2023</p>
              </div>
            </div>

            <div className="w-[632px] h-[80px] bg-[#4C2884] text-[#FFFFFF] shadow-lg border p-5 flex justify-between mx-auto mb-6 rounded-xl">
              <div className="flex gap-10">
                <div className="w-[40px] h-[40px] flex items-center bg-[#FEC431] justify-center border rounded-full">
                  <Image src={invoice} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] font-medium">New Invoice</h1>
                  <p className="text-[12px] font-normal text-[#A0A0A0]">
                    Created new invoice for a client
                  </p>
                </div>
              </div>

              <div>
                <p>01 - 08 - 2023</p>
              </div>
            </div>
            <div className="w-[632px] h-[80px] bg-[#4C2884] text-[#FFFFFF] shadow-lg border p-5 flex justify-between mx-auto mb-6 rounded-xl">
              <div className="flex gap-10">
                <div className="w-[40px] h-[40px] flex items-center bg-[#41ABE7] justify-center border rounded-full">
                  <Image src={dashboardicon} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] font-medium">Creative Designs</h1>
                  <p className="text-[12px] font-normal text-[#A0A0A0]">
                    Your scheduled designs for the month are all available
                  </p>
                </div>
              </div>

              <div>
                <p>01 - 08 - 2023</p>
              </div>
            </div>
          </div>

          <div className="w-1/3 p-3">
            <div className="flex justify-between items-center p-3 mb-4">
              <h1 className="text-[16px] font-semibold">Holiday Calender</h1>
              <p className="text-[#A0A0A0] text-[16px] font-semibold">2023</p>
            </div>

            <div className="w-{90%} h-[127px] justify-evenly bg-[#000000] mx-auto flex flex-col rounded-2xl text-[#FFFFFF] ">
              <div className="w-[90%] h-[42px] bg-[#1F1717] flex mx-auto p-4 items-center justify-between rounded-xl">
                <div className="flex gap-2">
                  <div className="w-[32px] h-[32px] rounded-full">
                    <Image src={Frame271} alt="" />
                  </div>
                  <p className="text-[18px] font-normal">Children's Day</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold">Sun 27 May</p>
                </div>
              </div>

              <div className="w-[90%] h-[42px] bg-[#1F1717] flex mx-auto p-4 items-center justify-between rounded-xl">
                <div className="flex gap-2">
                  <div className="w-[32px] h-[32px] rounded-full">
                    <Image src={Frame271} alt="" />
                  </div>
                  <p className="text-[18px] font-normal">Mother's Day</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold">Sun 27 May</p>
                </div>
              </div>
            </div>

            <div className="w-[100%] h-[48px] bg-[#4C2884] text-[#FFFFFF] text-[24px] items-center justify-center flex mx-auto rounded-xl mt-5">
              {" "}
              See More{" "}
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}
