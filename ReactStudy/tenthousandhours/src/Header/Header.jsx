import React from 'react'
import ImgClock from '../images/clock.png';
import ImgTitle from '../images/title.png';
import style from './Header.css'


export default function Header() {
    return (
        <>
            <section className='header'>
                <div className='title'>
                    <img className='img-clock' src={ImgClock} alt='background'></img>
                    <div className='img-title'>
                        <img src={ImgTitle} alt="1만 시간의 법칙" />
                    </div>
                </div>
            </section>
        </>
    )
}
