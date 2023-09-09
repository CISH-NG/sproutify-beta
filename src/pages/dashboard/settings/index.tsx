import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Image from "next/image";
import Group191 from "@/assets/images/Group191.png";
import Rectangle17 from "@/assets/images/Rectangle17.png";
import Group155white from "@/assets/images/Group155white.png";
import profileiconwhite from "@/assets/svg/profileiconwhite.svg";
import arrowrighticon from "@/assets/svg/arrowrighticon.svg";
import keyicon from "@/assets/svg/keyicon.svg";
import Notification from "@/assets/svg/Notification.svg";
import accountmanagement from "@/assets/svg/accountmanagement.svg";
import Link from "next/link";

export default function Settings() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-10">
        <h1 className="text-[32px] font-semibold">Settings</h1>
      </section>

      <section className="relative lg:w-[1022px] lg:h-[210px] justify-center flex  shadow-lg border mb-10 rounded-lg">
        <div className="absolute top-0 right-0 w-[50px] h-[100px]">
          <Image src={Group191} alt="" />
        </div>
        <div className="flex items-center ml-10 gap-5">
          <div className="w-[120px] h-[120px] rounded-full">
            <Image src={Group155white} alt="" />
          </div>
          <div className="flex flex-col  ">
            <h1 className="text-[24px] text-[#1F1717] font-semibold ">
              Sarah Ofili
            </h1>
            <p className="w-[510px] text-[24px] font-normal text-[#A0A0A0] ">
              Business Owner
            </p>
          </div>
        </div>
        <div className="w-[215px] h-[48px] bg-[#1F1717] text-[#FFFFFF] rounded-xl p-3 flex justify-center items-center my-auto">
          <button className="text-[24px] font-semibold">Change Photo</button>
        </div>
        <div className="absolute bottom-0 left-20 ">
          <Image src={Rectangle17} alt="" />
        </div>
      </section>

      <section className="lg:w-[1022px] h-[141px] flex gap-10 mb-10 border shadow-lg p-8 rounded-lg">
        <div className=" w-[100px] flex items-center">
          <div className="w-[32px] h-[32px] rounded-full bg-[#41ABE7] flex justify-center items-center mx-auto">
            <Image src={profileiconwhite} alt="" />
          </div>
        </div>
        <div className="w-[667px] flex flex-col gap-2">
          <h1 className="text-[24px] font-semibold">Account Info</h1>
          <p className="text-[16px] text-[#bdb6b6]">
            All your account information such as email address, location and
            phone number
          </p>
        </div>
        <div className=" w-[100px] items-center justify-center flex">
          <Link href={"/dashboard/settings/account-info"}>
            <div className=" rounded-full flex justify-center items-center mx-auto">
              <Image src={arrowrighticon} alt="" />
            </div>
          </Link>
        </div>
      </section>

      <section className="lg:w-[1022px] h-[141px] flex gap-10 mb-10 border shadow-lg p-8 rounded-lg">
        <div className=" w-[100px] flex items-center">
          <div className="w-[32px] h-[32px] rounded-full bg-[#9A4CEC] flex justify-center items-center mx-auto">
            <Image src={keyicon} alt="" />
          </div>
        </div>
        <div className="w-[667px] flex flex-col gap-2">
          <h1 className="text-[24px] font-semibold">Change Password</h1>
          <p className="text-[16px] text-[#bdb6b6]">
            Make changes to your password anytime
          </p>
        </div>
        <div className=" w-[100px] items-center justify-center flex">
          <Link href={"/dashboard/settings/change-password"}>
            <div className=" rounded-full flex justify-center items-center mx-auto">
              <Image src={arrowrighticon} alt="" />
            </div>
          </Link>
        </div>
      </section>

      <section className="lg:w-[1022px] h-[141px] flex gap-10 mb-10 border shadow-lg p-8 rounded-lg">
        <div className=" w-[100px] flex items-center">
          <div className="w-[32px] h-[32px] rounded-full bg-[#E11F1F] flex justify-center items-center mx-auto">
            <Image src={Notification} alt="" />
          </div>
        </div>
        <div className="w-[667px] flex flex-col gap-2">
          <h1 className="text-[24px] font-semibold">Notifications</h1>
          <p className="text-[16px] text-[#bdb6b6]">
            Turn on/off email notifications anytime
          </p>
        </div>
        <div className=" w-[100px] items-center justify-center flex">
          <Link href={"/dashboard/settings/notifications"}>
            <div className=" rounded-full flex justify-center items-center mx-auto">
              <Image src={arrowrighticon} alt="" />
            </div>
          </Link>
        </div>
      </section>

      <section className="lg:w-[1022px] h-[141px] flex gap-10 mb-10 border shadow-lg p-8 rounded-lg">
        <div className=" w-[100px] flex items-center">
          <div className="w-[32px] h-[32px] rounded-full bg-[#1F1717] flex justify-center items-center mx-auto">
            <Image src={accountmanagement} alt="" />
          </div>
        </div>
        <div className="w-[667px] flex flex-col gap-2">
          <h1 className="text-[24px] font-semibold">Account Management</h1>
          <p className="text-[16px] text-[#bdb6b6]">
            Update subscription payment info anytime
          </p>
        </div>
        <div className=" w-[100px] items-center justify-center flex">
          <Link href={"/dashboard/settings/account-management"}>
            <div className=" rounded-full flex justify-center items-center mx-auto">
              <Image src={arrowrighticon} alt="" />
            </div>
          </Link>
        </div>
      </section>
    </DashboardLayout>
  );
}
