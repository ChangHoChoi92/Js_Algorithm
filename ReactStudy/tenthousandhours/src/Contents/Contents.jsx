import React from 'react'
import './Contents.css'

export default function Contents() {
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
                    <form>
                        <p className='input-one'>나는<input type="text" name="" id="" placeholder='예)프로그래밍' />전문가가 될 것이다.</p>
                        <p className='input-two'>그래서 앞으로 매일 하루에<input type="number" name="" id="" placeholder='예)5' />시간씩 훈련할 것이다.</p>
                    </form>
                </div>

                <div className='output-wrap'>
                    <button>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
                </div>

                <div className='result-wrap'>
                    <p>당신은 <span>프로그래밍</span> 전문가가 되기 위해서</p>
                    <p>대략 <span>5110</span> 일 이상 훈련하셔야 합니다! :)</p>
                </div>

                <div className='btn-modal-wrap'>
                    <button>훈련하러 가기 GO!GO!</button>
                </div>
            </section>
        </>
    )
}
