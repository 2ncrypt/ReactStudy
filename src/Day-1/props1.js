import React from "react";

function TestProps({name, color}){
    //여긴 JavaScript 문법
    return (
        //여기 안에는 JSX문법
        //     props 하나로 전부 받아서 사용할때
        <div style={{color}}>
            Props Test vs hello.js {name}
        </div>
    );
}

// Hello라는 컴포넌트를 내보겠다는 의미. 이렇게 해야 다른 컴포넌트에서 불러와 사용 가능
export default TestProps