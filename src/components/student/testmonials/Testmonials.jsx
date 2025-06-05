import React, { useEffect, useState } from 'react'
import './testmonilas.css'
import {dummyTestimonial } from '../../../assets/assets';
import TestmonialsCard from '../testmonialsCard/TestmonialsCard';

const Testmonials = () => {
    let [persons,setPersons]=useState([]);

    useEffect(()=> {
        setPersons(dummyTestimonial);
    },[]);


    return (
        <div className='testmonials'>
            <div className="container">
                <div className="title">
                    <h1>Testmonials</h1>
                    <p>
                        Hear from our learners as they share their journeys of transformation, success, and how our
                        platform has made a difference in their lives.
                    </p>
                </div>
                <div className="persons">
                    {
                        persons.map((p,i)=> <TestmonialsCard person={p} key={i}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Testmonials
