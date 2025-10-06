import { Target } from "lucide-react";
import React, { useState } from "react";
import Popup from "./Popup";

export default function Hero() {
  const [popup, setPopup] = useState(false);
  return (
    <div id="home" className="MyContainer relative ">
      <div className="absolute z-[-10]">
        <img src="/Rectangle 2.png" alt="" />
        <img className="block lg:hidden" src="/Rectangle 2.png" alt="" />
      </div>
      <div className="grid z-100 pt-10 lg:grid-cols-2">
        <div>
          <div className="lg:pt-10 sm:pt-4 max-lg:text-center max-lg:mx-auto max-w-[450px]">
            <span className="text-[#896CFE] text-lg font-semibold">-</span>
            <p className="inline pl-2 text-lg">
              The Best Fitness & Workout App
            </p>
            <h1 className="text-4xl pl-3 pr-4 font-semibold pt-5 leading-normal">
              Your All-in-One{" "}
              <span className="text-[#896CFE]">Fitness App</span>
            </h1>
            <p className="pl-3 pt-4 text-[15px] leading-6">
              Unlock your best self with our all-in-one fitness app — offering
              1500+ guided workouts, personalized nutrition and meal plans,
              interactive community forums, and tailored challenges to match
              your fitness level. Whether you’re looking to build strength, lose
              weight, or stay active, our app keeps you motivated, connected,
              and on track toward your health goals
            </p>

            <div className="flex items-center justify-center md:gap-5 gap-3  pt-10">
              <div
                onClick={() => {
                  window.open(
                    "https://apps.apple.com/pk/app/powervatefitness/id6751278357",
                    "_blank"
                  );
                }}
                className="md:w-52 cursor-pointer hover:bg-slate-800 md:h-16 w-40 h-16 bg-[#2B2B2B] rounded-[10px] flex items-center justify-center gap-2 md:gap-3 "
              >
                <img src="/Group.png" alt="" />
                <div>
                  <p className="text-xs">GET IT ON</p>
                  <h1 className="md:text-base text-sm font-semibold">
                    GOOGLE PLAY
                  </h1>
                </div>
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://apps.apple.com/pk/app/powervatefitness/id6751278357",
                    "_blank"
                  );
                }}
                className="md:w-52 cursor-pointer hover:bg-slate-800 md:h-16 w-40 h-16 bg-[#2B2B2B] rounded-[10px] flex items-center justify-center gap-2 md:gap-3 "
              >
                <img src="/APPLE LOGO.png" alt="" />
                <div>
                  <p className="text-xs">DOWNLOAD ON THE</p>
                  <h1 className="md:text-base text-sm font-semibold">
                    APP STORE
                  </h1>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => setPopup(true)}
                className="px-5 h-10 rounded-[30px] hover:bg-[#6b48f8] transition-all duration-200 bg-[#896CFE] mt-6"
              >
                Book a demo
              </button>
            </div>

            <div className="grid grid-cols-2 pt-7 gap-5">
              <img src="/Avatar group.png" className="" alt="" />
              <div>
                <p className="font-semibold">5M +</p>
                <p className="text-xs text-gray-400 pt-4">Worldwide Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center max-lg:pt-10 relative items-center">
          <img src="/image 1.png" alt="" />
          <img className="absolute" src="/Group 3.png" alt="" />
        </div>
        <div className="flex justify-center lg:justify-end relative">
          <p className="absolute  text-6xl text-[#896CFE] px-auto lg:right-[9px]">
            ↓
          </p>
          <img src="/Rectangle 6.png" alt="" />
        </div>
      </div>
      {popup && <Popup setPopup={setPopup} />}
    </div>
  );
}
