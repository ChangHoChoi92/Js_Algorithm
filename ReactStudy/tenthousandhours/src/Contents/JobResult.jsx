import React from 'react'

export default function JobResult(props) {
    const { inputData } = props;
    console.log(inputData)
    return (
        <div className='result-wrap'>
            <p>당신은 <span></span> 전문가가 되기 위해서</p>
            <p>대략 <span></span> 일 이상 훈련하셔야 합니다! :)</p>
        </div>
    )
}
