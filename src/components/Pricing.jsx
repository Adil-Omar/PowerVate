import React from "react";

const Pricing = () => {
  const plans = [
    { duration: "1 Month", price: 149, custom: 49 },
    { duration: "3 Months", price: 350, custom: 49, popular: true },
    { duration: "6 Months", price: 600, custom: 49 },
    { duration: "1 Year", price: 850, custom: 49 },
  ];

  return (
    <div id="pricing" className="MyContainer">
      <div className="w-full py-20 flex flex-col items-center gap-3">
        <h1 className="text-3xl md:text-4xl text-[#896CFE] font-bold uppercase font-poppins tracking-widest">
          <span className="text-[#E2F163]">-</span> Let's Workout
        </h1>
        <h3 className="text-xl md:text-2xl font-bold uppercase font-poppins tracking-widest">
          Choose your Plans
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10 px-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-[#896CFE] rounded-3xl p-8 border-2 ${
                plan.popular ? "border-[#E2F163]" : "border-[#896CFE]/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E2F163] text-black px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}

              <h2 className="text-white text-2xl font-bold mb-4">
                {plan.duration}
              </h2>

              <div className="mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-[#E2F163] text-lg">/total</span>
                </div>
                <p className="text-[#E2F163] text-sm mt-1">
                  Billed {plan.duration}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#E2F163]">✓</span>
                  <span className="text-white text-sm">
                    Access for {plan.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E2F163]">✓</span>
                  <span className="text-white text-sm">All workout plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E2F163]">✓</span>
                  <span className="text-white text-sm">
                    Meal plans included
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-black">✓</span>
                  <span className="text-white text-sm">
                    Custom products{" "}
                    <span className="text-[#E2F163]">+${plan.custom}</span>
                  </span>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-full font-bold ${
                  plan.popular
                    ? "bg-[#2B2B2B] hover:bg-slate-800 "
                    : "bg-[#2B2B2B] hover:bg-slate-800 "
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
