import React from 'react'
import Hero from '../../components/student/hero/Hero'
import Companies from '../../components/student/companies/Companies'
import Testmonials from '../../components/student/testmonials/Testmonials'
import CallToAction from '../../components/student/callToAction/CallToAction'
import CourseSection from '../../components/student/courseSection/CourseSection'

const Home = () => {
  return (
    <div className='Home'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <Testmonials/>
      <CallToAction/>
    </div>
  )
}

export default Home
