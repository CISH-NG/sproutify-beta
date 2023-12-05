import DefaultLayouts from "@/layouts/DefaultLayouts";
import React from "react";
import Image from "next/image";
import Polygon from "@/assets/svg/polygon";
import mobilepreview1 from "../assets/images/mobile-prev1.png";
import mobilepreview2 from "../assets/images/mobile-prev12.png";
import businessmodel from "../assets/images/businessmodel.png";
import Ellipsea from "../assets/images/Ellipsea.png";
import Ellipseb from "../assets/images/Ellipseb.png";
import Ellipsec from "../assets/images/Ellipsec.png";
import Ellipsed from "../assets/images/Ellipsed.png";
import Ellipsee from "../assets/images/Ellipsee.png";
import Ellipsef from "../assets/images/Ellipsef.png";
import Ellipseg from "../assets/images/Ellipseg.png";
import Ellipseh from "../assets/images/Ellipseh.png";

const profileData = [
  { id: 1, name: "Kola Akindele", position: "CEO", image: Ellipsea },
  { id: 2, name: "Paul Okoye", position: "CEO", image: Ellipseb },
  { id: 3, name: "Kola Akindele", position: "CEO", image: Ellipsec },
  { id: 4, name: "Kola Akindele", position: "CEO", image: Ellipsed },
  { id: 5, name: "Kola Akindele", position: "CEO", image: Ellipsee },
  { id: 6, name: "Paul Okoye", position: "CEO", image: Ellipsef },
  { id: 7, name: "Kola Akindele", position: "CEO", image: Ellipseg },
  { id: 8, name: "Kola Akindele", position: "CEO", image: Ellipseh },
];

export default function AboutUs() {
  return (
    <DefaultLayouts>
      <section className=" flex flex-col items-center justify-center">
        <h1 className=" font-semibold text-[32px] mt-[128px] flex justify-center">
          About Us
        </h1>
        <p className="lg:w-[471px] w-full text-[16px] p-2 text-[#A0A0A0] flex justify-center text-center mt-10 mb-20 ">
          Empower your business with Sproutify- the ultimate transformational
          tool for businesses of all sizes.
        </p>
        <p className="lg:w-[1080px] w-full text-[16px] lg:text-[20px] p-2 flex justify-center text-center mb-20 ">
          Sproutify is committed to supporting your business every step of the
          way. From managing sales to -tracking expenses, our comprehensive app
          offers a wealth of features and resources designed specifically to
          help business owners like you achieve success. With Sproutify, you'll
          have access to a supportive community and expert guidance that will
          help you reach your goals and maximize your growth potential.
        </p>
      </section>
      <section className=" relative my-12 flex h-[100px] w-full justify-around gap-5 bg-[#4C2884] lg:my-20 lg:h-[320px] ">
        <div className="absolute top-0 left-0 z-0 rotate-0" aria-hidden="true">
          <Polygon />
        </div>

        <div className="flex justify-between gap-x-3 px-10 lg:max-w-7xl">
          <div className="relative z-10 flex w-1/2 items-center">
            <p className="max-w-lg text-left text-base text-white lg:text-5xl ">
              Over <span className="text-[#FEC431]">50,000</span> businesses
              enjoying tech services
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
      <section>
        <div className="mx-auto p-2 mt-14 flex w-full flex-col items-center justify-center lg:max-w-5xl">
          <h1 className=" mb-8 font-semibold lg:text-3xl">
            Why Choose Sproutify?
          </h1>
          <div className="mx-auto lg:text-xl text-[16px] text-[#5a5656] lg:max-w-5xl">
            <h3 className=" mb-8">
              &#x2022; Sproutify offers an all-in-one solution for streamlining
              your business operations and elevating your professionalism.
            </h3>
            <h3 className=" mb-8">
              &#x2022; With Sproutify, you can optimize your workflow to save
              time and increase efficiency, all while taking your business to
              the next level.
            </h3>
            <h3 className=" mb-8">
              &#x2022; Grow your business the smart way; Our advanced features
              and resources are designed to help you work smarter, not harder so
              you can focus on what you do best - growing your business.
            </h3>
            <h3>
              &#x2022; Join our community today and take advantage of all the
              resources and tools we have to offer.
            </h3>
          </div>
        </div>
      </section>
      <section className="mx-auto flex flex-col-reverse gap-12 p-10 lg:mt-20 lg:max-w-7xl lg:flex-row lg:gap-36">
        <div className="lg:w-3/5">
          <h2 className="text-center text-xl font-semibold lg:text-left lg:text-3xl">
            Our Vision
          </h2>
          <p className="mt-10 text-[16px] text-[#A0A0A0] lg:text-xl">
            Our vision is to revolutionize the way businesses operate by
            providing cutting-edge solutions that drive growth, profitability
            and success.
          </p>
          <h2 className="mt-10 text-center text-xl font-semibold lg:text-left lg:text-3xl">
            Our Mission
          </h2>
          <p className="mt-10 text-[16px] text-[#A0A0A0] lg:text-xl">
            Our mission is to empower businesses with innovative and
            transformative technology solutions that optimize efficiency,
            unleash untapped potential, and foster sustainable growth. We are
            committed to delivering cutting-edge tools, exceptional service, and
            unparalleled expertise, enabling our clients to thrive in a rapidly
            evolving digital landscape.
          </p>
        </div>

        <div className="m-auto mt-7 lg:w-2/5">
          <Image src={businessmodel} alt="" className="w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto mt-44 max-w-7xl px-10">
        <h2 className="mx-auto mb-4 max-w-sm text-center text-xl font-bold lg:text-4xl">
          Meet Our Team
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 p-2 lg:gap-x-8 lg:gap-y-24 lg:p-10">
          {profileData.map((profile) => (
            <div key={profile.id}>
              <div className=" h-24 w-24 md:h-36 md:w-36 lg:h-64 lg:w-64">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="my-2 text-center">
                <h2 className="font-bold">{profile.name}</h2>
                <h3>{profile.position}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayouts>
  );
}
