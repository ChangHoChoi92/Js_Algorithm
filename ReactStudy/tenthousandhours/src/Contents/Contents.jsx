import React, { useState } from 'react'
import './Contents.css'
import Modal from '../Modal/Modal';
// import JobInput from './JobInput';
// import JobResult from './JobResult';

export default function Contents() {

    const [modalShow, setModalShow] = useState(false);
    const [jobName, setJobName] = useState("");
    const [hour, setHour] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [resultJob, setresultJob] = useState("");
    const [resultTime, setResultTime] = useState(1);
    // state 값을 2개 이상 관리 해야할 때 객체 형태로 관리한다.
    const [result, setResult] = useState({
        jobName: "",
        hour: 0
    });
    const OpenModalHandler = () => {
        setModalShow(true);
    };

    const btnChange = () => {
        if (jobName && hour && hour > 0 && hour < 24) {
            const div = Math.ceil(10000 / hour)
            setShowResult(true);
            setresultJob(jobName);
            setResultTime(div);
        } else {
            alert("입력 값을 다시 한번 확인해주세요.")
        }
    }

    return (
        <>
            <section className='contents-wrap'>
                <div className='intro'>
                    <p>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</p>
                </div>
                <div className='intro-saying'>
                    <div>
                        <p>
                            <span>1만 시간의 법칙</span>은 <br />어떤 분야의 전문가가 되기 위해서는 <br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                        </p>
                    </div>
                </div>

                <div className='input-wrap'>
                    {/* <form onSubmit={handleSubmit}> */}
                    <p className='input-one'>나는
                        <input type="text" placeholder='예)프로그래밍' onChange={(e) => { setJobName(e.target.value) }} />
                        {/* <input type="text" name='jobName' onChange={(e) => { setResult({ ...result, jobName: e.target.value }) }} placeholder='예)프로그래밍' /> */}
                        전문가가 될 것이다.
                    </p>
                    <p className='input-two'>
                        그래서 앞으로 매일 하루에
                        <input type="number" placeholder='예)5' onChange={(e) => { setHour(e.target.value) }} />
                        {/* <input type="number" name='hour' onChange={(e) => { setResult({ ...result, hour: e.target.value }) }} placeholder='예)5' /> */}
                        시간씩 훈련할 것이다.
                    </p>
                    <div className='output-wrap'>
                        <button onClick={btnChange}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
                    </div>
                    {/* </form> */}
                </div>
                {showResult &&
                    <div className='result-wrap'>
                        <p>당신은 <span>{resultJob}</span> 전문가가 되기 위해서</p>
                        <p>대략 <span>{resultTime}</span> 일 이상 훈련하셔야 합니다! :)</p>
                    </div>
                }

                <div className='btn-modal-wrap'>
                    <button onClick={OpenModalHandler}>훈련하러 가기 GO!GO!</button>
                    {modalShow && <Modal setModalShow={setModalShow} />}
                </div>
            </section >
        </>
    )
}
