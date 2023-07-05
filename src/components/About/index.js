import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Resume from './20BCS5624_AmanSharma.pdf'
const About = () => {
    const [letterClass , setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        } , 3000)
    } , [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>

                <p className='para-about'>
                Welcome to my portfolio website! I'm thrilled to have you here. My name is Aman Sharma, and I am a passionate Software Engineer. Through this platform, I aim to showcase my creative journey and highlight the projects and experiences that have shaped my professional growth.                
                </p>

                <p className='para-about'>
                With a deep love for Software Development, I strive to bring innovative solutions to the table. Whether it's designing captivating visuals, crafting engaging content, or developing robust software, I believe in the power of Software Engineering to make a positive impact on the world.                
                </p>

                <p className='para-about'>
                Throughout my career, I have had the privilege of collaborating with talented individuals and organizations that share my vision for excellence. From startups to established businesses, I have had the opportunity to work on diverse projects that have honed my skills and expanded my horizons.                
                </p>

                <a href={Resume} download>
                <button className='btn-about'>
                  RESUME
                </button>
                </a>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About