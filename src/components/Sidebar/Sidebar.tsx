import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  DashboardIcon,
  SettingsIcon,
  SignoutIcon,
  SocialIcon2,
  ContentIcon,
  GlobeIcon2,
} from "@/assets/svg/dasboard-menu";
import { useCallback, useEffect, useState } from "react";
import { SidebarMenuItemProps } from "./Sidebar.types";
import Group155 from "@/assets/images/Group155.png";
import hamburgerIcon from "../../assets/svg/hamburger.svg";

const SidebarMenuItems: SidebarMenuItemProps[] = [
  {
    index: 0,
    label: "Dashboard",
    url: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    index: 1,
    label: "User Info",
    url: "/dashboard/user-info",
    icon: <SocialIcon2 />,
  },
  {
    index: 2,
    label: "Subscription",
    url: "/dashboard/subscription",
    icon: <ContentIcon />,
  },
  {
    index: 3,
    label: "Settings",
    url: "/dashboard/settings",
    icon: <SettingsIcon />,
  },
  {
    index: 4,
    label: "Sign Out",
    url: "#",
    icon: <SignoutIcon />,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [menuRef, setMenuRef] = useState<HTMLUListElement | null>(null);

  useEffect(() => {
    // Scroll to the active link
    if (menuRef) {
      const activeLink = menuRef.querySelector(".active-link");
      if (activeLink) {
        // @ts-ignore
        menuRef.scrollLeft = activeLink.offsetLeft;
      }
    }
  }, [activeIndex, menuRef]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const isSignout = useCallback((label: string) => label === "Sign Out", []);

  return (
    <>
      <nav className=" mt-10 ml-8 hidden  w-[20vw] rounded-3xl bg-[#000000] pt-14 justify-center lg:block items-center">
        <div className="flex items-center gap-x-4 mx-auto font-sans text-2xl text-[#FFFFFF] mb-28 flex-col">
          <div className="flex items-center">
            <Image src={Group155} alt="" />
          </div>
          <p className="ml-2">Sarah Ofili</p>
          <p className="ml-2 text-[16px]">Business Owner</p>
        </div>

        <ul className="flex flex-col gap-y-8 font-sans text-xl pl-5 py-10 lg:pl-[25%] bg-[#1F1717] rounded-b-3xl rounded-tr-[100px]">
          {SidebarMenuItems.map((item) => (
            <li
              key={item.index}
              className={`  ${
                isSignout(item.label) &&
                "mt-[50%] bg-[#000000] w-[198px] h-[70px] rounded-md flex items-center justify-center"
              }`}
            >
              <Link
                href={item.url}
                className={`flex cursor-pointer gap-x-6  ${
                  isSignout(item.label)
                    ? "text-[#1F1717]"
                    : router.pathname === item.url
                    ? "text-[#9A4CEC]"
                    : "text-[#504A4A]"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mt-16 px-[5%] lg:hidden">
        <ul
          ref={(ref) => setMenuRef(ref)}
          className="custom-scrollbar flex overflow-scroll"
        >
          {SidebarMenuItems.map(
            (item) =>
              !isSignout(item.label) && (
                <li
                  key={item.index}
                  className={router.pathname === item.url ? "active-link" : ""}
                >
                  <Link
                    href={item.url}
                    className={`flex whitespace-nowrap border-b-2 px-2  py-3 text-2xl font-semibold ${
                      router.pathname === item.url
                        ? "border-[#4C2884] text-[#4C2884]"
                        : "border-[#D9D9D9] text-[#D9D9D9]"
                    }`}
                    onClick={() => handleItemClick(item.index)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>
      
    </>
  );
}
