import React from 'react'
import './Modal.css'
import Liket from '../images/liket.png';

export default function Modal({ setModalShow }) {
    return (
        <div className='modal-backdrop'>
            <div className='modal'>
                <p className='fighting'>화이팅!!♥♥♥</p>
                <p>당신의 꿈을 응원합니다!</p>
                <img src={Liket} alt="라이캣" />
                <button onClick={() => setModalShow(false)}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
            </div>
        </div>
    )
}
