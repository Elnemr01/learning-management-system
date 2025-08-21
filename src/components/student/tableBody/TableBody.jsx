import React from 'react'
import './bodyStyle.css'
import { useSelector } from 'react-redux'
import EnrolledCourse from '../enrolledCourse/EnrolledCourse'

const TableBody = () => {
    let myCourses = useSelector(state => state.enrolledCourses);
    return (
        <tbody className='tableBody'>
            {
                myCourses.length !==0 
                ? myCourses.map((c, i) => <EnrolledCourse course={c} key={i} />)
                : <tr><td colSpan="4" className="empty-msg">No courses enrolled yet.</td></tr>
            }
        </tbody>
    )
}

export default TableBody
