import Navbar from "@/components/NavBar/NavBar";
import React, { useEffect, useState } from "react";
import Polygon4 from "@/assets/images/Polygon4.png";
import Link from "next/link";

function SignUp() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      password.trim() !== ""
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [firstName, lastName, email, phoneNumber, password]);

  function handleInputChange(event: React.FormEvent<HTMLFormElement>) {
    const { id, value } = event.target as HTMLInputElement;

    if (id === "firstname") {
      setFirstName(value);
    } else if (id === "lastname") {
      setLastName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "phonenumber") {
      setPhoneNumber(value);
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
        <div className="flex flex-col items-center justify-center px-6 py-14 lg:min-h-[calc(100vh-135px)] lg:pt-[120px] lg:pb-10">
          <h1 className=" text-3xl font-semibold">Sign Up</h1>

          <h1 className="mb-10 lg:text-3xl text-xl font-normal text-center">
            Create a{" "}
            <span className="text-[#4C2884] font-semibold">Sproutify</span>{" "}
            account and enjoy all our service
          </h1>
          {/* className="mb-4 mt-4 flex w-full max-w-[470px] flex-col items-center rounded-3xl border border-[#D9D9D9] px-8 pt-12 pb-8 lg:px-[72px]" */}
          <form
            className="mb-4 mt-4 w-full rounded-3xl border border-[#D9D9D9] bg-white px-8 pt-12  pb-8 lg:mx-auto lg:max-w-5xl lg:px-[72px]"
            onChange={handleInputChange}
          >
            <div className="my-2 flex flex-col justify-between gap-x-16 sm:mb-10 sm:flex-row">
              <div className="mb-5 w-full sm:mb-0 sm:w-1/2">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                  id="firstname"
                  type="text"
                  placeholder="First Name"
                />
              </div>

              <div className="mb-5  w-full sm:mb-0 sm:w-1/2">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="my-2 flex flex-col justify-between gap-x-16 sm:mb-10 sm:flex-row">
              <div className="mb-5  w-full sm:mb-0 sm:w-1/2">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-5 w-full sm:mb-0 sm:w-1/2">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="phonenumber"
                >
                  Phone Number
                </label>
                <input
                  className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                  id="phonenumber"
                  type="tel"
                  placeholder="+234"
                />
              </div>
            </div>

            <div className="my-2 flex flex-col justify-between gap-x-16 sm:mb-10 sm:flex-row">
              <div className="mb-5  w-full sm:mb-0 sm:w-1/2">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                  id="password"
                  type="text"
                  placeholder="Password"
                />
                <div className="flex flex-col gap-y-2 pt-4">
                  <p className="text-xs text-[#A0A0A0]">
                    Password should contain atleast one capital letter
                  </p>
                  <p className="text-xs  text-[#A0A0A0]">
                    Password should contain atleast one number
                  </p>
                  <p className="text-xs text-[#A0A0A0]">
                    Password should contain atleast one special key
                  </p>
                </div>
              </div>

              <div className="mb-5  w-1/2 sm:mb-0"></div>
            </div>

            <div className="mt-4 mb-16 flex flex-row justify-center space-x-6 text-center ">
              <p className="inline-block align-baseline text-sm font-bold">
                Are you a business owner?
              </p>

              <div className="flex flex-row justify-center space-x-4 text-center">
                <div className="space-x-1">
                  <label htmlFor="radioDefault01">Yes</label>
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                </div>

                <div className="space-x-1">
                  <label htmlFor="radioDefault02">No</label>
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault02"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className={`w-full rounded-xl lg:max-w-[319px]  ${
                  isFormFilled ? "bg-[#4C2884]" : "bg-[#4c28848f]"
                } py-4 px-4 text-lg font-bold text-white`}
                type="button"
              >
                Get Started
              </button>
            </div>
            <div className="mt-8 flex w-full flex-row justify-center">
              <a
                className="inline-block align-baseline text-sm font-bold text-[#DE0000] hover:text-red-800"
                href="#"
              >
                Read terms and conditions
              </a>
            </div>
          </form>
        </div>

        <div className="lg:w-[400px] w-full my-14 flex items-center text-center justify-center flex-col text-xl lg:text-[24px] font-medium gap-5">
          <h1>Already have an account?</h1>
          <h1>Lorem ipsum dolor sit amet consectetur. Faucibus sagittis.</h1>
          <Link href={"/signin"}>
            <button
              className="py-[13px] px-[32px] text-lg text-white rounded-xl w-[200px] bg-[#1F1717] font-medium  shadow-2xl"
              type="submit"
            >
              Sign In
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default SignUp;
