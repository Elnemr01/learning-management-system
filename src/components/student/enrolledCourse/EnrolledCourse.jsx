import React from 'react'
import './EnrolledCourse.css'

const EnrolledCourse = ({ course }) => {
    return (
        <tr className="enrolledCourse">
            <td className="course-title">
                <img src={course.courseThumbnail} alt={course.courseTitle} className="course-thumb" />
                {course.courseTitle}
            </td>
            <td>{course.courseContent?.length || 0} Chapters</td>
            <td>0%</td>
            <td>
                <span className={`status ${course.isPublished ? "active" : "pending"}`}>
                    {course.isPublished ? "Active" : "Pending"}
                </span>
            </td>
        </tr>
    )
}

export default EnrolledCourse
