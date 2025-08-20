export default function Download() {
  return (
    <div id="blog" >
      <div className="MyContainer py-12 lg:py-8">
        <div className="flex-col flex md:flex-row justify-between items-center text-center md:text-left gap-8 md:gap-0">
          <div>
            <div className="w-full max-w-[550px] mx-auto md:mx-0 lg:w-[460px]">
              <h1 className="text-3xl  font-semibold">
                Download Our <br />
                <span className="text-[#896CFE]">Fitness App</span> Today !
              </h1>
              <p className="pt-5">
                Our app is your complete fitness and wellness companion,
                offering 1500+ expert workouts, personalized meal plans, and
                interactive community forums. Stay motivated with tailored
                challenges, track your progress easily, and get the guidance you
                need to achieve your goals — anytime, anywhere
              </p>
            </div>
            <div className="flex gap-4 lg:gap-8 pt-8 justify-center md:justify-start">
              <div className="border-r-2 pr-4 lg:pr-8">
                <h1 className="text-[#896CFE] text-2xl">5 Million+</h1>
                <p className="text-gray-400 text-sm pt-1">
                  Worldwide Active Users
                </p>
              </div>
              <div className="border-r-2 pr-4 lg:pr-8">
                <h1 className="text-[#896CFE] text-2xl">1500+</h1>
                <p className="text-gray-400 text-sm pt-1">Workouts</p>
              </div>
              <div>
                <h1 className="text-[#896CFE] text-2xl">750+</h1>
                <p className="text-gray-400 text-sm pt-1">Nutrition Plans</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-6 md:gap-6 lg:gap-32 justify-center">
            <div className="flex flex-col items-center gap-12 max-md:py-6">
              <div>
                <h1 className="text-2xl font-semibold">For iOS</h1>
                <p className="text-gray-100 font-extralight text-sm pt-1">
                  iOS 15.6 +
                </p>
              </div>
              <div>
                <button className="text-[15px] py-2 px-5 hover:bg-[#E2F163] bg-[#896CFE] transition-all duration-200 hover:text-black rounded-[30px]">
                  Download App
                </button>
              </div>
              <div className="flex items-center justify-center">
                <img src="/Vector.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-12 max-md:py-6">
              <div>
                <h1 className="text-2xl font-semibold">For Android</h1>
                <p className="text-gray-100 font-extralight text-sm pt-1">
                  Android 8.6 +
                </p>
              </div>
              <div>
                <button className="text-[15px] py-2 px-5 hover:bg-[#896CFE] transition-all hover:text-white duration-200 text-black bg-[#E2F163] rounded-[30px]">
                  Download App
                </button>
              </div>
              <div className="flex items-center justify-center">
                <img src="/Vector.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/Frame 63.png" className="w-full pt-10" alt="" />
    </div>
  );
}
