import React, {Fragment} from "react";

// 외부에서 참조 할 수 있도록 pudblic형태로 선언한게 export default
export default function Header() {
    return (
        <Fragment>
                <div>태그로 감싸기 애매할때 </div>
                <h2>함수형 컴포넌트</h2>
                <h3>상태값이 없는 단순 컴포넌트</h3>
                <h3>파일 하나가 컴포넌트 하나</h3>
                <h3>파일명과 컴포넌트 function명이 같다.</h3>
                <br/>
                <h3>return 함수 자체에서 반환할 수 있는 태그는 상위태그 하나 밖에 없기때문에 div로 반환하는 경우가 많음</h3>
                <h3>하지만 리엑트 16버전에서는 Fragment라고 새로 나옴</h3>
                <h3>{'<>,</>'} 로만 감싸도 되지만</h3>
                <h3>식별할 수 있는 key값을 가져야하는 경우 Fragment로 묶어서 별도의 attritube값을 선언해줘야함.</h3>
            <h3>어디서든 재사용 가능</h3>
        </Fragment>
    )
}