import React, {useRef, useState} from "react";

export default function UseRefSample(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });
    const nameInput = useRef(null);

    const {name , nickname} = inputs;
    const onChange = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
        // useRef() 를 사용하여 Ref 객체를 만들고, 선택하고 싶은 DOM 에 ref 값으로 설정
        // Ref 객체의 .current 값은 선택한 DOM을 가리킴
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}

            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
                ref={nameInput}

            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}