import Link from "next/link";
import Facebook from "@/assets/svg/facebook-link";
import Twitter from "@/assets/svg/twitter-link";
import Instagram from "@/assets/svg/instagram-link";
import Whatsapp from "@/assets/svg/whatsapp-link";

const FooterItems = [
  {
    index: 0,
    label: "About Us",
    url: "/about-us",
  },
  {
    index: 1,
    label: "Contact Us",
    url: "/contact-us",
  },
  {
    index: 2,
    label: "FAQ",
    url: "#faq",
  },
  {
    index: 3,
    label: "Privacy Policy",
    url: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer className="relative  px-[5%] py-8 lg:py-12 border  ">
      <div className=" 2xl:mx-auto 2xl:max-w-screen-2xl gap-8 flex justify-center items-center flex-col">
        <div>
          <Link
            href="/"
            className="cursor-pointer font-poppins text-[32px] font-bold text-[#1F1717]"
          >
            Sproutify
          </Link>
        </div>

        <div>
          <ul className="flex gap-x-14 font-sans text-[#1F1717]">
            {FooterItems.map((item) => (
              <li key={item.index}>
                <Link
                  href={item.url}
                  className="transition-all duration-300 ease-in-out hover:text-[#A0A0A0] text-[24px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-0 w-full border border-[#1f171740]"></div>

        <div className="flex gap-12 ">
          <Link href="#">
            <Facebook />
          </Link>

          <Link href="#">
            <Instagram />
          </Link>

          <Link href="#">
            <Twitter />
          </Link>

          <Link href="#">
            <Whatsapp />
          </Link>
        </div>

        <p className="ft-copyright mt-12 text-center text-[#1F1717] lg:mt-0 lg:text-2xl">
          &copy; Copyright {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
