
import { Outlet, Route, Routes, useMatch } from 'react-router-dom'
import './App.css'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CouresDetails from './pages/student/CouresDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import Navbar from './components/student/stdNavbar/Navbar'
import Footer from './components/student/stdFooter/Footer'

function App() {

  const isEducator=useMatch('/educator/*');
  

  return (
    <div className="App">
      { !isEducator && <Navbar/>}
      {/* <div className="container"> */}
        <Routes>
          {/* for student */}
          <Route path='/' element={<Home/>}/>
          <Route path='/course-list' element={<CourseList />}/>
          {/* <Route path='/course/:input' element={<CourseList />}/> */}
          <Route path='/course/:id' element={<CouresDetails />}/>
          <Route path='/enrollments' element={<MyEnrollments/>}/>
          <Route path='/player/:courseId' element={<Player />}/>
          {/* for educator */}
          <Route path='/educator' element={<><Outlet/></>}>
            <Route path='/educator' element={<Educator />}/>
            <Route path='educator' element={<Dashboard/>} />
            <Route path='add-course' element={<AddCourse />} />
            <Route path='my-courses' element={<MyCourses/>} />
            <Route path='student-enroll' element={<StudentEnrolled />} />
          </Route>
        </Routes>
        <Footer/>
      {/* </div> */}
    </div>
  )
}

export default App
