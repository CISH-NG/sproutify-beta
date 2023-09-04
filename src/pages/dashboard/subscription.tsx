import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Image from "next/image";
import Group191 from "@/assets/images/Group191.png";
import Rectangle17 from "@/assets/images/Rectangle17.png";
import subscription from "@/assets/images/subscription.png";

export default function Subscription() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-10">
        <h1 className="text-[32px] font-semibold">Subscription</h1>
      </section>

      <section className="lg:w-[1022px] h-[872px] bg-[#F0F0F0] justify-center flex gap-10 mb-10 border mx-auto shadow-lg p-8">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="w-[310px] text-[32px] font-semibold">
            We have the perfect plan that lets you enjoy all our services
          </h1>
          <div className="w-[300px] h-[300px]">
            <Image src={subscription} alt="" />
          </div>
        </div>

        <div className="w-[568px] h-[747px] border shadow-lg bg-[#FFFFFF] p-8 relative">
          <div className="absolute top-0 right-0 w-[50px] h-[100px]">
            <Image src={Group191} alt="" />
          </div>

          <div className=" flex flex-col gap-3 justify-center items-center mt-5">
            <h1 className="text-[24px] font-semibold">Ultimate</h1>
            <p className="text-[20px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Fermentum vestibulum nulla
              pretium ullamcorper congue quis accumsan scelerisque.{" "}
            </p>
            <h1 className="text-[40px] my-3 font-bold">N5,000</h1>
            <div className="flex justify-evenly w-[470px] items-center gap-6">
              <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              <div className="text-[16px] font-normal mt-4">
                Lorem ipsum dolor sit amet consectetur. Fermen vestibulum nulla
                preti
              </div>
            </div>
            <div className="flex justify-evenly w-[470px] items-center gap-6">
              <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              <div className="text-[16px] font-normal mt-4">
                Lorem ipsum dolor sit amet consectetur. Fermen vestibulum nulla
                preti
              </div>
            </div>
            <div className="flex justify-evenly w-[470px] items-center gap-6">
              <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              <div className="text-[16px] font-normal mt-4">
                Lorem ipsum dolor sit amet consectetur. Fermen vestibulum nulla
                preti
              </div>
            </div>
            <div className="flex justify-evenly w-[470px] items-center gap-6">
              <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              <div className="text-[16px] font-normal mt-4">
                Lorem ipsum dolor sit amet consectetur. Fermen vestibulum nulla
                preti
              </div>
            </div>
          </div>

          <button className="border mt-8 w-[350px] mx-auto h-[56px] p-3 rounded-lg bg-[#4C2884] text-[#FFFFFF] text-center flex items-center justify-center my-auto text-[24px] font-normal">
            Subscribe
          </button>
          <div className="absolute bottom-0 left-0 ">
            <Image src={Rectangle17} alt="" />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
