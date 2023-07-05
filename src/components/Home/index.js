import LogoTitle from '../../assets/images/logo-aman.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState , useEffect } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters'
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass , setLetterClass] = useState('text-animate')
    const nameArray = ['m' , 'a' ,'n' , ' ' , 'S' , 'h' , 'a' , 'r' , 'm' , 'a']
    const jobArray = ['S' , 'o' , 'f' , 't' , 'w' , 'a' , 'r' , 'e' ,' ' , 'd' , 'e' , 'v' , 'e' , 'l' , 'o' , 'p' , 'e' , 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    } , [])
    

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`$(letterClass) _12`}>i</span> 
                <br/>
                <span className={`$(letterClass) _13`}>I</span>
                <span className={`$(letterClass) _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={10} />
                <br/>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={18} />
                </h1>
                <h2>Software Developer / Backend Developer / FrontEnd Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>

             </div>
             <Logo/>
             
        </div>
        <Loader type='pacman'/>
        </>
    )

}

export default Home