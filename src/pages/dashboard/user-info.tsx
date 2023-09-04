import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Image from "next/image";
import Group191 from "@/assets/images/Group191.png";
import Rectangle17 from "@/assets/images/Rectangle17.png";
import Group155white from "@/assets/images/Group155white.png";
import profileicon from "@/assets/svg/profileicon.svg";
import businessicon from "@/assets/svg/businessicon.svg";
import websitelink from "@/assets/svg/websitelink.svg";
import subscriptionsicon from "@/assets/svg/subscriptionsicon.svg";

export default function Userinfo() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-10">
        <h1 className="text-[32px] font-semibold">User Info</h1>
      </section>

      <section className="relative lg:w-[1022px] lg:h-[210px] justify-center flex  shadow-lg border mb-10">
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

      <section className="lg:w-[1022px] flex gap-10 mb-10">
        <div className="w-[430px] h-[570px] border shadow-lg p-8 flex flex-col gap-6">
          <div className="flex justify-between">
            <h1 className="text-[24px] font-semibold">Profile Info</h1>
            <div className="w-[32px] h-[32px] border rounded-full items-center justify-center flex bg-[#cde3f0]">
              <Image src={profileicon} alt="" />
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-7">
              <div className="w-350px h-[88px]">
                <label
                  htmlFor="username"
                  className="mb-2 text-[20px] font-normal text-[#1F1717]"
                >
                  User Name
                </label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Full Name"
                  className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
                />
              </div>
              <div className="w-350px h-[88px]">
                <label
                  htmlFor="businessname"
                  className="mb-2 text-[20px] font-normal text-[#1F1717]"
                >
                  Business Name
                </label>
                <br />
                <input
                  type="text"
                  name="businessname"
                  id="businessname"
                  placeholder="Enter Business Name"
                  className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
                />
              </div>
              <div className="w-350px h-[88px]">
                <label
                  htmlFor="location"
                  className="mb-2 text-[20px] font-normal text-[#1F1717]"
                >
                  Location
                </label>
                <br />
                <select
                  id="location"
                  name="location"
                  className="border w-full h-[56px] p-3 rounded-lg bg-[#ebeaea]"
                >
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="ibadan">Ibadan</option>
                </select>
              </div>
              <button className="border mt-4 w-full h-[56px] p-3 rounded-lg bg-[#4C2884] text-[#FFFFFF] text-center text-[24px]  flex items-center justify-center font-normal">
                Update
              </button>
            </form>
          </div>
        </div>
        <div className="w-[569px] h-[570px] border shadow-lg p-8 flex flex-col gap-6 ">
          <div className="flex justify-between">
            <h1 className="text-[24px] font-semibold">Business Info</h1>
            <div className="w-[32px] h-[32px] border rounded-full items-center justify-center flex bg-[#cde3f0]">
              <Image src={businessicon} alt="" />
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-7">
              <div className="w-350px">
                <textarea
                  name="username"
                  id="username"
                  placeholder="  Lorem ipsum dolor sit amet consectetur. Auctor arcu dolor eu
                  molestie quam. Volutpat at blandit faucibus amet scelerisque.
                  Porttitor lorem egestas ut tincidunt diam vitae etiam. Purus
                  nisl tortor ut mi in. Sit consequat arcu quam magna felis in
                  dictum. Viverra lectus sit ut enim cras consectetur. Quam
                  lobortis id amet aliquam. Sapien fusce consectetur lectus
                  egestas consectetur ac id ut. Ante."
                  className="border w-full h-[328px] p-3 rounded-lg bg-[#ebeaea]"
                ></textarea>
              </div>
              <button className="border mt-2 w-full h-[56px] p-3 rounded-lg bg-[#4C2884] text-[#FFFFFF] text-center flex items-center justify-center text-[24px] font-normal">
                Update
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="lg:w-[1022px] h-[321px] flex gap-10 mb-10 border shadow-lg  p-8 flex-col ">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-semibold">Website</h1>
          <div className="w-[32px] h-[32px] border rounded-full items-center justify-center flex bg-[#f8eccd]">
            <Image src={websitelink} alt="" />
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-7">
            <div className="w-350px">
              <label
                htmlFor="location"
                className="mb-2 text-[20px] font-normal text-[#1F1717]"
              >
                Sproutify Link
              </label>
              <br />
              <input
                name="username"
                id="username"
                placeholder="achadow/sproutify.com"
                className="border w-full h-[56px] mt-2 p-3 rounded-lg bg-[#ebeaea]"
              />
            </div>
            <button className="border mt-2 w-[350px] mx-auto h-[56px] p-3 rounded-lg bg-[#4C2884] text-[#FFFFFF] text-center flex items-center justify-center text-[24px] font-normal">
              Update
            </button>
          </form>
        </div>
      </section>

      <section className="lg:w-[1022px] h-[530px] flex gap-10 mb-10 border shadow-lg  p-8 flex-col">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-semibold">Subscriptions</h1>
          <div className="w-[32px] h-[32px] border rounded-full items-center justify-center flex bg-[#f8eccd]">
            <Image src={subscriptionsicon} alt="" />
          </div>
        </div>
        <div className="w-[871px] h-[280px] border mx-auto rounded-t-3xl">
          <div className="bg-[#00820D] w-full h-[100px] rounded-t-3xl flex items-center ">
            <h1 className="text-[#FFFFFF] text-[24px] font-normal flex ml-10">
              Current Plan
            </h1>
          </div>
          <div className="flex justify-between p-3 w-[800px] mx-auto">
            <h1 className="text-[32px] font-semibold">Silver Plan</h1>
            <div className="flex justify-between flex-col gap-1">
              <div className="flex gap-4 items-center">
                <div className="w-[10px] h-[10px] rounded-full bg-[#00820D]"></div>
                <h1 className="text-16px font-normal text-[#1F1717]">
                  6 Designs Monthly
                </h1>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-[10px] h-[10px] rounded-full bg-[#00820D]"></div>
                <h1 className="text-16px font-normal text-[#1F1717]">
                  Custom Website
                </h1>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-[10px] h-[10px] rounded-full bg-[#00820D]"></div>
                <h1 className="text-16px font-normal text-[#1F1717]">
                  Invoice Generator
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-3 w-[800px] mx-auto">
            <h1 className="text-[32px] font-semibold">N6,000.00/month</h1>
            <p className="text-[#DE0000] text-[16px] font-normal">Learn more</p>
          </div>
        </div>
        <button className="border mt-2 w-[350px] mx-auto h-[56px] p-3 rounded-lg bg-[#1F1717] text-[#FFFFFF] text-center flex items-center justify-center my-auto text-[24px] font-normal">
          Cancel Subscription
        </button>
      </section>
    </DashboardLayout>
  );
}
