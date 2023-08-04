import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
