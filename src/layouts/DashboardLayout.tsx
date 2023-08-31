import { SignoutIcon } from "@/assets/svg/dasboard-menu";
import Navbar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { PropsWithChildren, useState } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [loggedin] = useState(false);
  // const { data, error } = useSWR('/api/navigation', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <div className="min min-h-screen bg-[#F9F9F9]">
      <Navbar loggedin={loggedin} />
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="px-[5%] mt-10 pt-10 pb-12 lg:ml-[calc(20vw+32px)] lg:px-8">
          <div className="mx-auto max-w-[calc(1280px-20vw+32px)]">
            {children}
          </div>
          {/* <button className=" mx-auto mt-20 flex items-center gap-x-4 font-sans text-2xl text-[#FFFFFF] lg:hidden">
            <SignoutIcon /> Sign Out
          </button> */}
        </div>
      </div>
    </div>
  );
}
