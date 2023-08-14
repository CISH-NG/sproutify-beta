import React from "react";
import Image from "next/image";
import Group94 from "@/assets/images/Group94.png";

export default function Screens() {
  return (
    <section className="px-[5%] max-width mt-20 flex flex-col-reverse items-center gap-y-10 gap-x-[5%] lg:mt-0 l lg:flex-row lg:py-20">
      <div className="lg:w-1/2">
        <div className="mb-8 lg:mb-20">
          <h1 className="text-center font-sans text-2xl font-semibold text-inky-black lg:text-left lg:text-[56px] lg:leading-[68px]">
            Elevate your <span className="text-[#9A4CEC]">Business</span> with a
            personal <span className="text-[#9A4CEC]">Website</span>
          </h1>

          <p className="lg:text-[24px] text-[16px] mt-6 text-[#A0A0A0]">
            Welcome to Sproutify - the platform that empowers businesses to grow
            and flourish! With our all-in-one solution, you can easily create
            websites, generate invoices, access eye-catching designs, launch
            powerful digital marketing campaigns, and seamlessly manage all
            digital aspects of your business.
          </p>
          <p className="lg:text-[24px] text-[16px] mt-6 text-[#A0A0A0]">
            Say goodbye to the hassle of juggling multiple tools and hello to
            the streamlined efficiency of Sproutify!
          </p>
        </div>

        <button className="border border-[#E0E0E0] bg-[#4C2884] py-[13px] px-[32px] text-[20px] rounded-xl lg:w-[198px] text-[#FFFFFF] font-medium">
          Get Started
        </button>
      </div>

      <div className="px-[10%] sm:px-[20%] lg:w-1/2 lg:px-0">
        <Image
          src={Group94}
          alt="Picture of the author"
          className="mx-auto mt-10 rounded-xl lg:ml-auto lg:mr-0 lg:mt-0"
        />
      </div>
    </section>
  );
}
