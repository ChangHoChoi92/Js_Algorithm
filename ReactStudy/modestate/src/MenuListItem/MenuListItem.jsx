import React from 'react'
import "./MenuListItem.css"

export default function MenuListItem(props) {

    const onItemClick = () => {
        props.setCurrentMood(props.mood)
    }

    // onClick={() =>props.setCurrentMood(props.mood)} 으로도 가능하고 위에 변수로 선언해서 변수로 담아두 됨 가독성 좋은걸로 선택하여 사용
    return (
        <li>
            <button onClick={onItemClick} className='btn-item'>기분이 : {props.mood}</button>
        </li>
    )
}
