import DefaultLayouts from "@/layouts/DefaultLayouts";
import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";
import phonelink from "@/assets/svg/phonelink.svg";
import website from "@/assets/svg/website.svg";
import digitalmarketing from "@/assets/svg/digitalmarketing.svg";
import subscriptions from "@/assets/svg/subscriptions.svg";
import designs from "@/assets/svg/designs.svg";
import Polygon from "@/assets/svg/polygon";
import mobilepreview1 from "../assets/images/mobile-prev1.png";
import mobilepreview2 from "../assets/images/mobile-prev12.png";
import retailer2 from "../assets/images/retailer2.png";
import frame8 from "@/assets/images/frame-8.png";
import frame9 from "@/assets/images/frame-9.png";
import Frame10 from "@/assets/images/Frame10.png";
import Frame11 from "@/assets/images/Frame11.png";
import squareImg from "@/assets/images/square.png";

const clientsSaying = [
  {
    id: 1,
    name: "Gabriel Jalingo",
    image: frame8,
    comment:
      "Sproutify has completely transformed our workflow and made managing our projects a breeze. We've seen a significant increase in productivity and efficiency since we started using it.",
  },
  {
    id: 2,
    name: "Lanre Fagbemi",
    image: frame9,
    comment:
      "With Sproutify's advanced analytics and reporting capabilities, we were able to identify areas of improvement in our business operations and make data-driven decisions that have led to substantial growth.",
  },
  {
    id: 3,
    name: "Yunusa Tanko",
    image: Frame10,
    comment:
      "The support team is incredibly responsive and always goes above and beyond to ensure we're getting the most out of the platform. We feel like valued partners, not just customers.",
  },
  {
    id: 4,
    name: "Evelyn Okolo",
    image: Frame11,
    comment:
      "It is user-friendly and easy to navigate, even for non-technical team members",
  },
];

export default function Home() {
  return (
    <DefaultLayouts>
      <section className="px-[5%] max-width mt-20 flex flex-col-reverse items-center gap-y-10 gap-x-[5%] lg:mt-0 l lg:flex-row lg:py-20">
        <div className="lg:w-1/2">
          <div className="mb-8 lg:mb-20">
            <h1 className="text-center font-sans text-2xl font-semibold text-inky-black lg:text-left lg:text-[56px] lg:leading-[68px]">
              Our <span className="text-[#9A4CEC]">Business</span> is to help
              manage your <span className="text-[#9A4CEC]">Business</span>
            </h1>

            <p className="text-[24px] mt-6 text-[#A0A0A0]">
              Welcome to Sproutify - the platform that empowers businesses to
              grow and flourish! With our all-in-one solution, you can easily
              create websites, generate invoices, access eye-catching designs,
              launch powerful digital marketing campaigns, and seamlessly manage
              all digital aspects of your business.
            </p>
            <p className="text-[24px] mt-6 text-[#A0A0A0]">
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
            src={heroImage}
            alt="Picture of the author"
            className="mx-auto mt-10 rounded-xl lg:ml-auto lg:mr-0 lg:mt-0"
          />
        </div>
      </section>

      <section className="w-[1073px] h-[104px] flex justify-center items-center font-semibold bg-[#1F1717] mx-auto   my-20 rounded-xl text-center">
        <h1 className="text-[#FFF] text-[40px]">
          Over <span className="text-[#FEC431]">50,000</span> businesses
          enjoying tech services
        </h1>
      </section>

      <section className="w-full mb-20">
        <div className="w-[400px] mx-auto text-center">
          <h1 className="text-[32px] font-semibold text-[#1F1717]">
            We offer digital solutions for your business
          </h1>
        </div>
      </section>

      <section className="w-[1200px] mx-auto flex p-5 justify-evenly flex-wrap gap-5 mb-20">
        <div className="w-[340px] h-[400px]  flex flex-col justify-center items-center gap-5">
          <div className="w-[80px] h-[80px] bg-[#CECECE40] rounded-full items-center flex justify-center">
            {" "}
            <Image src={phonelink} alt="" />
          </div>
          <h1 className="text-[#1F1717] text-[24px] font-bold">Social Media</h1>
          <p className="text-[#A0A0A0] text-[24px] text-center">
            Elevate your online presence with specifically crafted social media
            management strategies, that align with your brands voice and vision.
          </p>
        </div>

        <div className="w-[340px] h-[500px]   flex flex-col justify-center items-center gap-5">
          <div className="w-[80px] h-[80px] bg-[#CECECE40] rounded-full items-center flex justify-center">
            {" "}
            <Image src={website} alt="" />
          </div>
          <h1 className="text-[#1F1717] text-[24px] font-bold">Website</h1>
          <p className="text-[#A0A0A0] text-[24px] text-center">
            Say goodbye to complex coding and endless frustration. Sproutify
            provides you with a hassle-free website creation experience where
            you can focus on unleashing your creativity while we take care of
            the technical complexities.
          </p>
        </div>

        <div className="w-[340px] h-[350px]  flex flex-col justify-center items-center gap-5">
          <div className="w-[80px] h-[80px] bg-[#CECECE40] rounded-full items-center flex justify-center">
            {" "}
            <Image src={digitalmarketing} alt="" />
          </div>
          <h1 className="text-[#1F1717] text-[24px] font-bold">
            Digital Marketing{" "}
          </h1>
          <p className="text-[#A0A0A0] text-[24px] text-center">
            Achieve online success with carefully curated digital marketing
            strategies tailored to your brands needs.
          </p>
        </div>

        <div className="w-[340px] h-[500px] flex flex-col justify-center items-center gap-5">
          <div className="w-[80px] h-[80px] bg-[#CECECE40] rounded-full items-center flex justify-center">
            {" "}
            <Image src={subscriptions} alt="" />
          </div>
          <h1 className="text-[#1F1717] text-[24px] font-bold">
            Subscriptions{" "}
          </h1>
          <p className="text-[#A0A0A0] text-[24px] text-center">
            Experience a range of Sproutify’s capabilities without compromising
            your budget. Whether you’re a budding entrepreneur or an established
            enterprise, our flexible pricing options ensure that you can choose
            a plan that aligns perfectly with your goals.
          </p>
        </div>

        <div className="w-[340px] h-[350px]  flex flex-col justify-center items-center gap-5">
          <div className="w-[80px] h-[80px] bg-[#CECECE40] rounded-full items-center flex justify-center">
            {" "}
            <Image src={designs} alt="" />
          </div>
          <h1 className="text-[#1F1717] text-[24px] font-bold">Designs </h1>
          <p className="text-[#A0A0A0] text-[24px] text-center">
            Bring your brand to life through our innovative and visually
            captivating designs that are sure to leave a lasting impression on
            your audience.
          </p>
        </div>
      </section>

      <section className=" relative my-12 flex h-[100px] w-full justify-around gap-5 bg-[#4C2884] lg:mt-52 lg:h-[320px] ">
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

      <section className="w-full h-[478px] flex my-[200px] ">
        <div className="flex-1 bg-[#1F1717] text-[#FFFFFF] flex flex-col p-10 gap-8">
          <h1 className="text-[32px] w-[518px] font-semibold mx-48">
            Create quick invoices for your customers
          </h1>
          <p className="text-[24px] text-[#A0A0A0] w-[800px] font-semibold mx-48">
            Streamline your invoicing process and save time with our quick
            invoicing solution. Easily generate professional invoices for your
            customers with just a few clicks. Say goodbye to manual invoicing
            and hello to fast, efficient billing. Try our quick invoicing tool
            today and get paid faster!
          </p>
          <button className="mx-48 bg-[#4C2884] w-[230px] px-[13px] py-[20px] text-[24px] rounded-xl">
            Create Invoice
          </button>
        </div>
        <div className="w-[478px]">
          <Image src={retailer2} alt="" />
        </div>
      </section>

      <section className="flex flex-col my-[180px] gap-[180px] ">
        <div className="text-center ">
          <h1 className="text-[32px] font-semibold">
            What Our Clients are saying
          </h1>
        </div>

        <div className="w-[1200px] mx-[400px] flex flex-wrap gap-10 ">
          {clientsSaying.map((client) => (
            <div className=" w-[45%] flex gap-10" key={client.id}>
              <div className="w-[120px] h-[122px]">
                <Image src={client.image} alt="" />
              </div>
              <div className="w-[321px] flex flex-col">
                <h1 className="text-[32px] font-semibold">{client.name}</h1>
                <p className="text-[#A0A0A0] text-[24px]">{client.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-width mt-16 px-[10%] lg:mt-40 lg:px-[5%]">
        <h2 className="text-center text-2xl font-semibold lg:text-5xl">
          Our Partners
        </h2>

        <div className="mt-20 mb-14 flex flex-wrap justify-between gap-y-6 lg:mb-40">
          {new Array(5).fill(0).map((_, i) => (
            <Image src={squareImg} alt="partner" key={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto flex flex-col gap-6 justify-center items-center my-[126px] ">
        <h1 className="text-[24px] text-[#1F1717] font-normal">
          Subscribe to get prompt updates
        </h1>
        <div className="flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className="py-4 px-2 pl-14 pr-12 w-[420px] bg-[#9A4CEC] rounded-lg focus:outline-none "
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-12 w-[120px] bg-[#4C2884] text-white text-[18px] rounded-lg flex items-center justify-center focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </DefaultLayouts>
  );
}
