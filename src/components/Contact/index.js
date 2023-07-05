import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import React from 'react'
import { MapContainer,TileLayer, Marker, Popup } from 'react-leaflet'
import nice from './nice-day.avif'

const Contact = () => {

    const [letterClass , setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        } , 3000)
    } , [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_a3b0tqh',
            'template_yk9ebrm',
            form.current,
            '6ZrQifW3Ecrx-FUAm'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C' , 'o' , 'n' , 't', 'a' , 'c' , 't' , ' ' , 'm' , 'e']} />
                </h1>
                <p className='para-contact'>
                Please feel free to reach out using the contact form below. We promise to respond as promptly as possible. Alternatively, you can also connect with us through our social media channels, where we share updates, insights, and inspiration.
                </p>

                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required ></input>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required></input>
                            </li>
                            <li>
                                <input placeholder='subject' type='text' name='subject' required></input>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'></input>
                            </li>
                        </ul>
                    </form>
                </div>
                
            </div>
            <div className='info-map'>
                Aman Sharma
                <br/>
                Chhota Govindpur
                <br/>
                Jamshedpur, Jharkhand
                <br/>
                INDIA
                <span>aman.jsr64@gmail.com</span>
            </div>
            <div className='map-wrap'>
                {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>Aman lives here, Please come for a cup of coffee.</Popup>
                    </Marker>
                </MapContainer> */}
                
                <img className='thanks' src={nice}></img>
            </div>
            
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact