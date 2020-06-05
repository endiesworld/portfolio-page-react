import React from 'react'
import './homepage.styles.scss'
import pics from '../../assets/home-page-background.jpg'

function Homepage() {
    return (
        <div className= 'home-page'>
            <div className='home-page-children'> 
                <div className="image-holder">
                    <img src={pics} alt="" />
                </div>
                <div className="intro-text">
                    <div className ='text-holder'>
                        <h1> Hi, I'm <span className ='name'>Emmanuel Okoro</span>,</h1>
                        <h1> aspiring full-stack developer</h1>
                    </div>
                    <button className='about-button'>
                        <div>My works ? </div><div className='arrow-holder'>&#10140;</div></button>
                </div>
            </div>
        </div>
    )
}

export default Homepage
