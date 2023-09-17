import React, { useState } from 'react'

export default function JobInput(props) {

    const { onCopy } = props;
    const [content, setContent] = useState('');

    const handleContent = (e) => {
        setContent(e.target.value);
        console.log(e.target.value);
    }

    const onSubmit = () => {

        const _inputData = {
            content: { content }
        }
        onCopy(_inputData)
        // setContent('');
    }


    return (
        <>
            <p className='input-one'>나는
                <label htmlFor='jobName'></label>
                <input type="text" name='content' onChange={handleContent} value={content} placeholder='예)프로그래밍' />
                전문가가 될 것이다.
            </p>
            <p className='input-two'>
                그래서 앞으로 매일 하루에
                <label htmlFor='hour'></label>
                <input type="number" name='content' placeholder='예)5' />
                시간씩 훈련할 것이다.
            </p>
            <div className='output-wrap'>
                <button onClick={onSubmit}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            </div>
        </>
    )
}
