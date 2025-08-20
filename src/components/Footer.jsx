import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="">
      <div className=" pt-64 relative">
        <div className="absolute w-full top-0 flex justify-center">
          <div className="w-full flex justify-center px-4 py-8">
            <div className="w-full max-w-[1200px] MyContainer text-center flex flex-col justify-around rounded-3xl min-h-[340px] bg-[#896CFE]">
              <div className="max-w-[556px] px-4 sm:px-6 mx-auto py-8">
                <h1 className="text-lg sm:text-xl ">
                  Unlock your Fitness Potential: Your Workout Hub
                </h1>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black py-4 font-semibold">
                  Download The App Now
                </h1>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 md:gap-5 pt-8 sm:pt-10">
                  <div className="w-full max-w-[200px] sm:w-40 md:w-52 h-14 sm:h-16 bg-[#2B2B2B] rounded-[10px] flex items-center justify-center gap-2 md:gap-3">
                    <img
                      src="/Group.png"
                      alt=""
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <div className="text-left">
                      <p className="text-[10px] sm:text-xs text-white/80">
                        GET IT ON
                      </p>
                      <h1 className="text-sm md:text-base font-semibold text-white">
                        GOOGLE PLAY
                      </h1>
                    </div>
                  </div>
                  <div className="w-full max-w-[200px] sm:w-40 md:w-52 h-14 sm:h-16 bg-[#2B2B2B] rounded-[10px] flex items-center justify-center gap-2 md:gap-3">
                    <img
                      src="/APPLE LOGO.png"
                      alt=""
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <div className="text-left">
                      <p className="text-[10px] sm:text-xs text-white/80">
                        DOWNLOAD ON THE
                      </p>
                      <h1 className="text-sm md:text-base font-semibold text-white">
                        APP STORE
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2B2B2B] pt-52">
          <div className="grid grid-cols-1 max-sm:px-10  MyContainer sm:grid-cols-2  lg:grid-cols-4 gap-12">
            <div className="flex flex-col lg:pr-10 justify-start items-start gap-12">
              <img src="/Layer_1.png" alt="" />
              <p>
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </p>
              <div className="flex justify-center gap-2">
                <img src="/1.png" alt="" />
                <img src="/2.png" alt="" />
                <img src="/3.png" alt="" />
                <img src="/4.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col lg:pl-14 justify-start items-start gap-7">
              <h1 className="text-[#896CFE] text-xl">COMPANY</h1>
              <div className="flex flex-col gap-3">
                <p>Home</p>
                <p>Features</p>
                <p>Services</p>
                <p>Contact Us</p>
                <p>About Us</p>
              </div>
            </div>
            <div className="flex flex-col lg:pl-8 justify-start items-start gap-7">
              <h1 className="text-[#896CFE] text-xl">Help</h1>
              <div className="flex flex-col gap-3">
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>

            <div>
              <form className="flex items-center bg-gray-800 rounded-lg shadow-lg">
                <div className="flex items-center px-4 lg:px-2 xl:px-4 py-2 flex-grow">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent text-white placeholder-gray-400 outline-none text-sm w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#E2F163] flex-shrink-0 hover:bg-yellow-500 text-black rounded-r-lg font-medium px-1 lg:px-2 py-2 transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
