import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import googleBtn from "../assets/svg/google-btn.svg";
import facebookBtn from "../assets/svg/facebook-btn.svg";
import Navbar from "@/components/NavBar/NavBar";
import Polygon4 from "@/assets/images/Polygon4.png";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [email, password]);

  function handleInputChange(event: React.FormEvent<HTMLFormElement>) {
    const { id, value } = event.target as HTMLInputElement;

    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  }

  return (
    <>
      <Navbar />
      <section
        className=" flex justify-evenly lg:flex-row flex-col "
        style={{
          backgroundImage: `url(${Polygon4.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="my-16 flex min-h-[calc(100vh-135px)] flex-col items-center justify-center px-[5%] lg:my-20">
          <form
            className="mb-4 mt-4 flex w-full max-w-[470px] flex-col items-center rounded-3xl bg-white border border-[#D9D9D9] px-8 pt-12 pb-8 lg:px-[72px]"
            onChange={handleInputChange}
          >
            <h1 className="mb-10 text-3xl">Sign In</h1>
            <div className="w-full">
              <input
                className="mb-8 w-full rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                id="email"
                type="text"
                placeholder="Email Address"
              />

              <input
                className="mb-6 w-full rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                id="password"
                type="text"
                placeholder="Password"
              />

              <a
                className="mb-8 block text-center align-baseline text-base text-[#DE0000]"
                href="#"
              >
                Forgot Password
              </a>

              <button
                className={`w-full rounded-xl  ${
                  isFormFilled ? "bg-[#4C2884]" : "bg-[#4c28848f]"
                } py-4 px-4 text-lg font-bold text-white`}
                type="button"
                disabled={isFormFilled}
              >
                Sign In
              </button>

              {/* <div className="mt-6 flex w-full flex-row justify-evenly">
                <p className="text-center font-sans text-base text-[#1F1717]">
                  You do not have an account?{" "}
                  <a className="text-[#00820D]" href="#">
                    Sign Up
                  </a>
                </p>
              </div> */}

              <div className="mt-8 flex justify-center gap-x-6">
                <button>
                  <Image src={googleBtn} alt="Google signin button" />
                </button>
                <button>
                  <Image src={facebookBtn} alt="Google signin button" />
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:w-[400px] w-full mb-10 flex items-center text-center justify-center flex-col text-xl lg:text-[24px] lg:font-medium gap-5 lg:text-black text-[#FFFFFF]">
          <h1>You do not have an account?</h1>
          <h1>Lorem ipsum dolor sit amet consectetur. Faucibus sagittis.</h1>
          <Link href={"/signup"}>
            <button
              className="py-[13px] px-[32px] text-lg text-white rounded-xl w-[200px] bg-[#1F1717] font-medium  shadow-2xl"
              type="submit"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Signin;
