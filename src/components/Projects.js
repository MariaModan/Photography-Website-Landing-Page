import React from 'react';
import Nav from './Nav';
import field from '../img/field1.jpg';
import wedding from '../img/wedding1.jpg';
import horses from '../img/horses1.jpg';
import woman from '../img/woman-face.jpg';
import pool from '../img/infinity-pool.jpg';
import dog from '../img/dog1.jpg';
import '../css/projects.css'

const Projects = () => {
    return(
        <section>
            <Nav />
            <div className='projectSection'>
                <h3>Recent Projects</h3>
                <div className='projects-container' >
                    <img src={dog} alt='' id='pic1' className='img' />
                    <img src={horses} alt='' id='pic2' className='img'/>
                    <img src={pool} alt='' id='pic3' className='img'/>
                    <img src={woman} alt='' id='pic4' className='img'/>
                    <img src={wedding} alt='' id='pic5' className='img'/>
                    <img src={field} alt='' id='pic6' className='img'/> 
                </div>
            </div> 
        </section>
    )
}

export default Projects;