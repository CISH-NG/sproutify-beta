import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import searchicon from "@/assets/svg/searchicon.svg";
import plusicon from "@/assets/images/plusicon.png";
import Invoice from "@/assets/svg/Invoice.svg";

export default function invoice() {
  return (
    <DashboardLayout>
      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <h1 className="text-[32px] font-semibold">Invoice</h1>
        <Link href={"/dashboard"}>
          <h1 className="text-[24px] text-[#4C2884] font-medium">Back</h1>
        </Link>
      </section>

      <section className="lg:w-[1022px] flex justify-between mb-5 items-center">
        <form className="flex">
          <div className="flex  border items-center p-2 rounded-lg gap-2 ">
            <div className="ml-3">
              <Image src={searchicon} alt="" />
            </div>
            <input
              type="search"
              className="w-[321px] h-[48px] p-2"
              placeholder="Search"
              style={{ backgroundImage: "url(/assets/svg/searchicon.svg)" }}
            />
          </div>
          <button className="border h-[65px] p-4 rounded-lg bg-[#4C2884] text-[#FFFFFF]">
            Search
          </button>
        </form>
      </section>

      <section className="flex justify-between mb-10 ">
        <div className="lg:w-[362px] flex flex-col shadow-lg border py-4 ">
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
          <div className="w-full h-[63px] border flex justify-between items-center px-3 mb-3 ">
            <div className="flex gap-3 justify-center">
              <div className="w-[40px] h-[40px] mt-2 flex items-center bg-[#FEC431] justify-center border rounded-full">
                <Image src={Invoice} alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-medium">Soma Cole</h1>
                <p className="text-[12px] font-normal text-[#A0A0A0] ">
                  01 - 01 - 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-semibold">N100,000.00</h1>
            </div>
          </div>
        </div>

        <div className="lg:w-[628px] lg:h-[818px] flex flex-col shadow-lg border p-10 ">
          <div className="flex justify-between mb-5">
            <h1 className="bg-[#4C2884] w-[64px] h-[64px] flex justify-center items-center rounded-md text-[32px] text-[#FFFFFF] font-medium">
              A
            </h1>
            <h1 className="text-[#1F1717] text-[24px] font-medium">
              Brand Name
            </h1>
          </div>

          <div className="flex justify-between mb-5">
            <div>
              <h1 className="text-[#1F1717] text-[24px] font-medium">
                Client Name
              </h1>
              <p className="text-[#A0A0A0] text-[16px] font-normal">
                Client Phone number/Mail
              </p>
            </div>
            <h1 className="text-[#A0A0A0] text-[16px] font-normal">DD-MM-YY</h1>
          </div>

          <table className="border">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-[#1F1717] w-1/4  text-center text-xs leading-4 font-medium text-white uppercase tracking-wider">
                  Qty
                </th>
                <th className="px-6 py-3 bg-[#1F1717] w-2/4 text-center  border text-xs leading-4 font-medium text-white uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 bg-[#1F1717] w-1/4 text-center text-xs leading-4 font-medium text-white uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 1</td>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 2</td>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 1</td>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 2</td>
                <td className="px-6 py-4 whitespace-no-wrap">Data 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 1</td>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 2</td>
                <td className="px-6 py-4 whitespace-no-wrapborder">Data 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 1</td>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 2</td>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 1</td>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 2</td>
                <td className="px-6 py-4 whitespace-no-wrap border">Data 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border bg-[#1F1717] text-[#FFFFFF]">
                  Total
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border bg-[#1F1717]"></td>
                <td className="px-6 py-4 whitespace-no-wrap border bg-[#1F1717] text-[#FFFFFF]">
                  Amount
                </td>
              </tr>
            </tbody>
          </table>

          <div className="w-[24px] h-[24px] my-8 flex justify-center items-center ml-auto bg-[#00820D] rounded-full">
            <Image src={plusicon} alt="" className="w-1/3" />
          </div>

          <button className="w-[180px] h-[48px] text-[#DE0000] ml-auto font-semibold border flex items-center justify-center ">
            View PDF
          </button>
        </div>
      </section>
    </DashboardLayout>
  );
}
