import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Newnotifications from "@/assets/images/Newnotifications.png";

export default function notifications() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[32px] font-semibold">Notifications</h1>
        <Link href={"/dashboard"}>
          <h1 className="text-[24px] text-[#4C2884] font-medium">Back</h1>
        </Link>
      </section>
      <section className="flex flex-col justify-center items-center mt-28 gap-10">
        <div className="w-[400px] h-[400px]">
          <Image src={Newnotifications} alt="" />
        </div>
        <h1 className="text-[32px] font-semibold">No Notifications</h1>
      </section>
    </DashboardLayout>
  );
}
