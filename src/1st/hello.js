import React from "react";

function Hello(props){
    // 삼항 연산자로 Hello({name, color, isSpecial}) 이렇게도 사용 가능
    //여긴 JavaScript 문법
    return (
        //여기 안에는 JSX문법
        //     props 하나로 전부 받아서 사용할때 2 받아올때
        <div style={{color : props.color}}>
            {/*이렇게 단순하게 2개로 사용가능*/}
            {props.isSpecial ? <b>*</b> : null}
            {props.isSpecial && <b>%</b>}
            hi Hello 안녕 {props.name}
        </div>
        
    );
}

// Hello라는 컴포넌트를 내보겠다는 의미. 이렇게 해야 다른 컴포넌트에서 불러와 사용 가능
export default Hello