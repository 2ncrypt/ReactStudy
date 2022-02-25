import React, {useState} from "react";

export default function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        // 이벤트에 등록하는 함수에선 이벤트 객체 e를 파라미터로 받아와서 사용가능
        // 이 객체의 e.target은 이벤트가 발생한 Dom인 inputDom을 가르킴
        // 이 Dom의 value 즉 e.target.value를 조회하면 현재 input 입력값을 알 수 있음
        setText(e.target.value);
    }
    const onReset =  () => {
        setText('');
    }
    return (
        <>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value : {text}</b>
            </div>
        </>
    )
}