import React from 'react'
import Hero from '../../components/student/hero/Hero'
import Companies from '../../components/student/companies/Companies'
import Testmonials from '../../components/student/testmonials/Testmonials'

const Home = () => {
  return (
    <div className='Home'>
      <Hero/>
      <Companies/>
      <Testmonials/>
    </div>
  )
}

export default Home
