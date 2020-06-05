import React from 'react'
import './about.styles.css'

function AboutPage() {
    return (
        <div className='about-page'>
            <section className='image-section'>
                <div className='image-holder'>

                </div>
            </section>
            <section className='tech-stack-section'>
                <div className='stack-holder'>
                    <div className='stack-holder-header'>
                        <h2>My skill set aren't limited to the below!!!</h2>
                    </div>
                    <div className='skill-set'>
                        <div className='html-holder'>
                            <div className ='skill-grade'>
                                <p className='skill'> HTML</p>
                                <p className='grade'> 78%</p>
                            </div>
                        </div>
                        <div className='css-holder'>
                            <h1> CSS</h1>
                        </div>
                        <div className='javascript-holder'>
                            <h1> JavaScript </h1>
                        </div>
                        <div className='react-holder'>
                            <h1> React </h1>
                        </div>
                        <div className='java-holder'>
                            <h1> Java </h1>
                        </div>
                        <div className='spring-holder'>
                            <h1> SpringBoot </h1>
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </div>
    )
}

export default AboutPage
