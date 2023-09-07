import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import design1 from "@/assets/images/design1.png";
import design2 from "@/assets/images/design2.png";
import design3 from "@/assets/images/design3.png";
import design4 from "@/assets/images/design4.png";
import design5 from "@/assets/images/design5.png";
import design6 from "@/assets/images/design6.png";

const designs = [
  {
    id: 1,
    image: design1,
  },
  {
    id: 2,
    image: design2,
  },
  {
    id: 3,
    image: design3,
  },
  {
    id: 4,
    image: design4,
  },
  {
    id: 5,
    image: design5,
  },
  {
    id: 6,
    image: design6,
  },
];
export default function CreativeDesigns() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[32px] font-semibold">Creative Designs</h1>
        <Link href={"/dashboard"}>
          <h1 className="text-[24px] text-[#4C2884] font-medium">Back</h1>
        </Link>
      </section>

      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[24px] font-semibold text-[#706f6f]">
          Your 6 monthly curated designs are ready
        </h1>
      </section>

      <section className="flex flex-wrap gap-14">
        {designs.map((design) => (
          <div
            className="lg:w-[300px] flex justify-center items-center p-2"
            key={design.id}
          >
            <div className="h-[160px]">
              <Image src={design.image} alt="" />
            </div>
          </div>
        ))}
      </section>

      <section className=" mt-9">
        <h1 className="text-[16px] font-semibold">All designs</h1>
      </section>

      <section className="flex flex-wrap gap-14 mb-10">
        {designs.map((design) => (
          <div
            className="lg:w-[300px] flex justify-center items-center p-2"
            key={design.id}
          >
            <div className="h-[160px]">
              <Image src={design.image} alt="" />
            </div>
          </div>
        ))}
      </section>
    </DashboardLayout>
  );
}
