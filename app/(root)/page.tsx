import React from 'react'
import { Contact, Hero, History } from '@/components'

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <History />
        <Contact />
      </div>
    </>
  )
}

export default Home
