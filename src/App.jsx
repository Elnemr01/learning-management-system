
import { Outlet, Route, Routes, useMatch } from 'react-router-dom'
import './App.css'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CouresDetails from './pages/student/CouresDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Navbar from './components/student/stdNavbar/Navbar'
import Footer from './components/student/stdFooter/Footer'

function App() {

  

  return (
    <div className="App">
      <Navbar/>
      {/* <div className="container"> */}
        <Routes>
          {/* for student */}
          <Route path='/' element={<Home/>}/>
          <Route path='/course-list' element={<CourseList />}/>
          <Route path='/course/:id' element={<CouresDetails />}/>
          <Route path='/enrollments' element={<MyEnrollments/>}/>
          <Route path='/player/:courseId' element={<Player />}/>
        </Routes>
        <Footer/>
      {/* </div> */}
    </div>
  )
}

export default App
