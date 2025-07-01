import React from 'react'
import './stdPagesStyle/enrollments.css'

const MyEnrollments = () => {
    return (
        <div className='enrollments'>
            <div className="container">
                <h2>my enrollments</h2>
                <table>
                    <thead>
                        <tr>
                            <td>course</td>
                            <td>duration</td>
                            <td>completed</td>
                            <td>status</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default MyEnrollments
