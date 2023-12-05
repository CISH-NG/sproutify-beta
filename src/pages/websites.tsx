import DefaultLayout from "@/layouts/DefaultLayouts";
import React from "react";
import Image from "next/image";
import Group94 from "@/assets/images/Group94.png";
import Polygon from "@/assets/svg/polygon";
import mobilepreview1 from "@/assets/images/mobile-prev1.png";
import mobilepreview2 from "@/assets/images/mobile-prev12.png";
import website from "@/assets/svg/website.svg";
import subscriptions from "@/assets/svg/subscriptions.svg";
import designs from "@/assets/svg/designs.svg";
import retailer2 from "@/assets/images/retailer2.png";

const services = [
  {
    id: 1,
    name: "Website",
    content:
      " Say goodbye to complex coding and endless frustration. Sproutify provides you with a hassle-free website creation experience.",
    image: website,
  },
  {
    id: 2,
    name: "Subscriptions",
    content:
      "Experience a range of Sproutify’s capabilities without compromising your budget. Our flexible pricing options ensure that you can choose a plan that aligns perfectly with your goals.",
    image: subscriptions,
  },
  {
    id: 3,
    name: "Designs",
    content:
      "Bring your brand to life through our innovative and visually captivating designs that are sure to leave a lasting impression on your audience.",
    image: designs,
  },
];

export default function CreativeDesigns() {
  return (
    <DefaultLayout>
      <section className="px-[5%] max-width mt-20 flex flex-col items-center gap-y-10 gap-x-[5%] lg:mt-0 l lg:flex-row lg:py-20">
        <div className="lg:w-1/2  mx-auto flex flex-col justify-center ">
          <div className="mb-8 lg:mb-20">
            <h1 className="text-center font-sans text-2xl font-semibold text-inky-black lg:text-left lg:text-[56px] lg:leading-[68px]">
              Elevate your <span className="text-[#9A4CEC]">Business</span> with
              <span className="text-[#9A4CEC]"> Personal Website</span>
            </h1>

            <p className="lg:text-[24px] text-[16px] mt-6 text-[#A0A0A0]">
              Transform your business presence with a personal website. Elevate
              your brand, connect with customers, and showcase your unique
              offerings in the digital realm. Ready to leave a lasting
              impression? Let&apos;s build your online identity together!
            </p>
          </div>

          <button className="border border-[#E0E0E0] bg-[#4C2884] py-[13px] px-[32px] text-[20px] w-[198px] mx-auto lg:mx-0 rounded-xl lg:w-[198px] text-[#FFFFFF] font-medium">
            Get Started
          </button>
        </div>

        <div className="px-[10%] sm:px-[20%] lg:w-1/2 lg:px-0 ">
          <Image
            src={Group94}
            alt="Picture of the author"
            className="mx-auto mt-10 rounded-xl lg:ml-auto  lg:mt-0"
          />
        </div>
      </section>

      <section className=" relative my-12 flex h-[100px] w-full justify-around gap-5 bg-[#4C2884] lg:my-20 lg:h-[320px] ">
        <div className="absolute top-0 left-0 z-0 rotate-0" aria-hidden="true">
          <Polygon />
        </div>

        <div className="flex justify-between gap-x-3 px-10 lg:max-w-7xl">
          <div className="relative z-10 flex w-1/2 items-center">
            <p className="max-w-xl text-left text-[14px]  text-white lg:text-5xl ">
              Elevate Your Business with Tech Excellence:{" "}
              <span className="text-[#FEC431]">
                Join our Thriving Community today
              </span>{" "}
            </p>
          </div>
          <div className="relative flex w-1/2 overflow-hidden">
            <div className="flex items-end">
              <Image src={mobilepreview1} alt="" className=" object-cover" />
            </div>

            <div className="flex items-start">
              <Image src={mobilepreview2} alt="" className=" object-cover " />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full my-20">
        <div className="lg:w-[400px] w-full mx-auto text-center">
          <h1 className="text-[30px] font-semibold text-[#1F1717]">
            We offer digital solutions for your business
          </h1>
        </div>
      </section>

      <section className="lg:w-[1200px] w-full  mx-auto flex lg:p-5 justify-evenly lg:flex-row flex-col lg:flex-wrap lg:gap-12 my-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-[340px] max-h-[500px] p-3 mx-auto flex flex-col items-center gap-5"
          >
            <div className="w-[80px] h-[80px] bg-[#CECECE40] rounded-full items-center flex justify-center">
              {" "}
              <Image src={service.image} alt="" />
            </div>
            <h1 className="text-[#1F1717] text-[24px] font-bold">
              {service.name}
            </h1>
            <p className="text-[#A0A0A0] lg:text-[24px] text-[16px] text-center w-[280px]">
              {service.content}
            </p>
          </div>
        ))}
      </section>

      <section className="lg:h-[478px] h-[800px] flex lg:flex-row flex-col my-[200px] mx-auto justify-between bg-[#1F1717]">
        <div className="flex flex-col p-3 lg:p-10 gap-8 lg:ml-24">
          <h1 className="lg:text-[32px] text-[24px] text-center text-[#FFFFFF] lg:text-left lg:w-[518px]  font-semibold ">
            Create quick invoices for your customers
          </h1>
          <p className="lg:text-[24px] text-[16px] text-[#A0A0A0] lg:text-left lg:w-[800px] text-center font-semibold">
            Streamline your invoicing process and save time with our quick
            invoicing solution. Easily generate professional invoices for your
            customers with just a few clicks. Say goodbye to manual invoicing
            and hello to fast, efficient billing. Try our quick invoicing tool
            today and get paid faster!
          </p>
          <button className=" bg-[#4C2884] py-[13px] px-[32px] lg:text-[20px] rounded-xl w-[198px] mx-auto lg:mx-0 lg:w-[198px] text-[#FFFFFF] font-medium">
            Create Invoice
          </button>
        </div>
        <div className="lg:w-[478px]  lg:h-full flex">
          <Image src={retailer2} alt="" />
        </div>
      </section>

      <section className="mx-auto flex flex-col gap-6 justify-center items-center my-[126px] ">
        <h1 className="text-[24px] text-[#1F1717] text-center font-normal">
          Subscribe to get prompt updates
        </h1>
        <div className="flex justify-center ">
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className="py-4 px-2 pl-2 pr-48 w-full lg:w-[420px] placeholder-white text-white bg-[#9A4CEC] rounded-lg focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-12 w-[100px] bg-[#4C2884] text-white text-[18px] rounded-lg flex items-center justify-center focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
