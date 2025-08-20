import React from "react";

export default function Benefits() {
  return (
    <div id="about" className="MyContainer py-12 lg:py-8">
      <div className="flex-col flex md:flex-row justify-between items-center text-center md:text-left gap-8 md:gap-0">
        <div>
          <div className="w-full max-w-[450px] mx-auto md:mx-0 lg:w-[460px]">
            <h1 className="text-2xl  font-semibold">
              <span className="text-[#896CFE]">-</span> Benefits of Fitness App{" "}
              <br />
            </h1>
            <h1 className="text-2xl  font-semibold pt-4">
              <span className="text-[#896CFE]">Exclusive Benefits</span> <br />{" "}
              of Fitness App
            </h1>
          </div>
        </div>
        <div className="md:border-l-[1px] font-light md:w-[460px]">
          <p className=" md:pl-3">
            Personal plans, trackable progress, and quick workouts — all in one app.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 py-8">
        <div className="p-5 flex flex-col justify-between items-center gap-7" >
          <img src="/Group 5.png" alt="" />
          <h1 className="text-[#896CFE] ">Time Efficiency</h1>
          <p className="text-center" >
            Short, high-impact sessions designed for busy lives. Follow guided
            routines you can do at home or on the go most workouts finish in
            15–30 minutes with clear warmup and cooldown cues.
          </p>
        </div>
        <div className="p-5 flex flex-col justify-between items-center gap-7" >
          <img src="/Group 5 (1).png" alt="" />
          <h1 className="text-[#896CFE] ">Personalized Workouts</h1>
          <p className="text-center" >
            Plans that adapt as you improve — from beginner to advanced.
            Tailored progressions, suggested intensity, and optional trainer
            tips help you reach goals safely and efficiently.
          </p>
        </div>
        <div className="p-5 flex flex-col justify-between items-center gap-7" >
          <img src="/Group 5 (2).png" alt="" />
          <h1 className="text-[#896CFE] ">Cost Savings</h1>
          <p className="text-center" >
            All the coaching you need inside the app — structured programs,
            video demos, and nutrition pointers — at a fraction of the cost of
            regular gym memberships or private coaching.
          </p>
        </div>
        <div className="p-5 flex flex-col justify-between items-center gap-7" >
          <img src="/Group 5 (3).png" alt="" />
          <h1 className="text-[#896CFE] ">Fast And Accurate</h1>
          <p className="text-center" >
            Auto-track sets, reps, duration and calories with simple controls.
            Progress graphs, milestones and weekly summaries make it easy to
            celebrate gains and stay motivated.
          </p>
        </div>
      </div>
    </div>
  );
}
