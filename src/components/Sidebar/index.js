import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-aman.png'
import LogoSubtitle from '../../assets/images/logo-sub-aman-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="Aman" />
        </Link>

        <nav>
             <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
         <ul>
            <li>
                <a target="_blank" rel='noreferrer' href = 'https://www.linkedin.com/in/aman-sharma-8927b51b6'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href = 'https://github.com/aaaammmmaaaannnn'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href = 'https://instagram.com/amansharma6077?igshid=MzNlNGNkZWQ4Mg=='>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href = 'https://instagram.com/amansharma6077?igshid=MzNlNGNkZWQ4Mg=='>
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>
        </ul> 
    </div>
)

export default Sidebar