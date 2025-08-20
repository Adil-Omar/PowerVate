import React from 'react'
import Home from './home/Home'

import "@fontsource/poppins/200.css"; // Regular
import "@fontsource/poppins/300.css"; // Regular
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export default function App() {
  return (
    <div className='bg-[#212020] text-white font-poppins' >
      <Home />
    </div>
  )
}
