import React, { useState } from 'react'
import Popup from './Popup';

export default function View() {
  const [popup, setPopup] = useState(false);
  return (
    <div id='demo' className='MyContainer text-center ' >
        <p className='text-base md:text-lg pb-1' ><span className='text-[#896CFE] pr-2' >-</span>App Demo</p>
        <h1 className='text-lg md:text-xl ' ><span className='text-[#896CFE] pb-4' >View Our</span> App Demo</h1>

        <img className='mx-auto mt-12'  src="/Rectangle 10.png" alt="" />
        <div className="" >
              <button onClick={() => setPopup(true)}
              className="px-5 h-10 rounded-[30px] hover:bg-[#6b48f8] transition-all duration-200 bg-[#896CFE] mt-10"
            >
              Book a demo
            </button>

            </div>
      {popup && <Popup setPopup={setPopup} />}
    </div>
  )
}
