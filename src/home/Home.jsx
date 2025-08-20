import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Download from '../components/Download'
import Benefits from '../components/Benefits'
import View from '../components/View'
import Activity from '../components/Activity'
import Nutrition from '../components/Nutrition'
import Community from '../components/Community'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Download />
      <Benefits />
      <View />
      <Activity />
      <Nutrition />
      <Community />
      <Footer />
    </div>
  )
}
