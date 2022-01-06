import React, {useState} from "react";

function Counter(){
    // 화살표 함수 자바스크립트에 있음 - 아래는 화살표함수 예제
    // const add = (a, b) => {
    //     return a + b;
    // };
    // console.log(add(1, 2));

    // useState는 상태의 기본 값을 파라미터로 넣어서 호출
    const [number, setNumber] = useState(0);
    // 위는 아래와 같은 기능을 하는 코드
    // const numberState = userState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1]

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            {/*함수뒤에 onincrease() 이런식으로 쓰면 렌더링 시점에 함수가 호출되어버림*/}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter