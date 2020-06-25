import React from 'react'
import './about.styles.css'

function AboutPage() {
    return (
        <div className='about-page' id='about'>
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
                        <div className='skill-and-grade-holder'>
                            <div className ='skill-level html-skill'>
                               <div className='skill'>HTML</div>
                            </div>
                            <div className ='grade-level'>
                                <div className='grade'> 80%</div>
                            </div>
                        </div>
                        <div className='skill-and-grade-holder'>
                            <div className ='skill-level css-skill'>
                               <div className='skill'>CSS</div>
                            </div>
                            <div className ='grade-level'>
                                <div className='grade'> 70%</div>
                            </div>
                        </div>
                        <div className='skill-and-grade-holder'>
                            <div className ='skill-level javascript-skill'>
                               <div className='skill'>JavaScript</div>
                            </div>
                            <div className ='grade-level'>
                                <div className='grade'> 80%</div>
                            </div>
                        </div>
                        <div className='skill-and-grade-holder'>
                            <div className ='skill-level react-skill'>
                               <div className='skill'>React</div>
                            </div>
                            <div className ='grade-level'>
                                <div className='grade'> 75%</div>
                            </div>
                        </div>
                        <div className='skill-and-grade-holder'>
                            <div className ='skill-level java-skill'>
                               <div className='skill'>Java</div>
                            </div>
                            <div className ='grade-level'>
                                <div className='grade'> 65%</div>
                            </div>
                        </div>
                        <div className='skill-and-grade-holder'>
                            <div className ='skill-level springboot-skill'>
                               <div className='skill'>SpringBoot</div>
                            </div>
                            <div className ='grade-level'>
                                <div className='grade'> 40%</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </div>
    )
}

export default AboutPage
