import React from 'react'
import './stdPagesStyle/enrollments.css'
import TableBody from '../../components/student/tableBody/TableBody'

const MyEnrollments = () => {
    return (
        <div className='enrollments'>
            <div className="container">
                <h2 className="enrollments-title">My Enrollments</h2>
                <table className="enrollments-table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Duration</th>
                            <th>Completed</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <TableBody/>
                </table>
            </div>
        </div>
    )
}

export default MyEnrollments
