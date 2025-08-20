import React from 'react'

export default function Community() {
  return (
    <div id='testi' className='MyContainer' >
        <div className='flex items-center gap-4 justify-between' >
            <div>
                <h1 className='lg:text-2xl text-lg text-[#896CFE]' ><span className='text-[#E2F163] pr-2' >-</span>Community</h1>
                <h1 className='lg:text-2xl md:text-lg text-base pt-2 max-w-[750px]'>Join the conversation, share workout tips, and get answers from fellow fitness enthusiasts worldwide</h1>
            </div>
            <div>
                <button className='bg-[#896CFE] hover:bg-[#fbc03f] hover:text-black max-md:text-sm transition-all duration-200 w-36 md:w-40 h-12 rounded-[30px]' >View All Forum</button>
            </div>
        </div>
        <div className='md:grid flex flex-col items-center justify-items-center md:grid-cols-2 max-md:gap-8 py-8' >
            <div className='max-w-[570px] flex flex-col justify-between items-center border -2 border-[#E2F163] rounded-[18px] h-[240px] p-5' >
                <div className='flex justify-between items-center w-full' >
                    <div className='flex items-center justify-center gap-3' >

                        <img src="/Profile Picture.png" alt="" />
                        <h1 className='text-xl text-[#E2F163]' >Madison</h1>
                    </div>
                    <div>
                        <img src="/Stars Altern.png" alt="" />
                    </div>

                </div>
                    <p className='text-[#E2F163] tex-xl font-light' >Lorem ipsum dolor sit amet consectetur. Tortor aenean suspendisse pretium nunc non facilisi.</p>
                    <div className='flex justify-between items-center w-full' >
                        <div className='flex items-center justify-start gap-3' >
                            <img src="/Star.png" alt="" />
                            <p className='text-base font-light text-[#E2F163]' >30,254</p>
                        </div>
                        <div className='flex items-center justify-start gap-3' >
                            <img src="/Vector (1).png" alt="" />
                            <p className='text-base font-light text-[#E2F163]' >30,254</p>
                        </div>
                        <div className='flex items-center justify-start gap-3' >
                            <img src="/Vector (2).png" alt="" />
                            <p className='text-base font-light text-[#E2F163]' >30,254</p>
                        </div>

                    </div>

            </div>
            <div className='max-w-[570px] flex flex-col justify-between items-center border -2 border-[#E2F163] rounded-[18px] h-[240px] p-5' >
                <div className='flex justify-between items-center w-full' >
                    <div className='flex items-center justify-center gap-3' >

                        <img src="/Profile Picture.png" alt="" />
                        <h1 className='text-xl text-[#E2F163]' >Madison</h1>
                    </div>
                    <div>
                        <img src="/Stars Altern.png" alt="" />
                    </div>

                </div>
                    <p className='text-[#E2F163] tex-xl font-light' >Lorem ipsum dolor sit amet consectetur. Tortor aenean suspendisse pretium nunc non facilisi.</p>
                    <div className='flex justify-between items-center w-full' >
                        <div className='flex items-center justify-start gap-3' >
                            <img src="/Star.png" alt="" />
                            <p className='text-base font-light text-[#E2F163]' >30,254</p>
                        </div>
                        <div className='flex items-center justify-start gap-3' >
                            <img src="/Vector (1).png" alt="" />
                            <p className='text-base font-light text-[#E2F163]' >30,254</p>
                        </div>
                        <div className='flex items-center justify-start gap-3' >
                            <img src="/Vector (2).png" alt="" />
                            <p className='text-base font-light text-[#E2F163]' >30,254</p>
                        </div>

                    </div>

            </div>

        </div>
      
    </div>
  )
}
