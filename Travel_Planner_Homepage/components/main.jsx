import React from 'react'
import video from '../assets/Travel_Planner_Background_Compressed'

const Main= () => {
    <div className='main'> 
    <div className='overlay'></div>
    <video src={video} autoPlay loop muted/>
    <div className='content'>
        <h1> Welcome </h1> 
        <p> To Travel Planner</p>
    </div>

    </div>
}

export default Main