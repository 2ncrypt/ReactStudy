import React, {useState} from "react";

export default function MultiInputSample () {
    const [input, setInput] = useState({
        name : '',
        nickname : ''
    });

    const {name , nickname} = input;

    const onChange = (e) => {
        const {value , name} = e.target; // 여기서 value , name 추출
        setInput({
            ...input,
            [name]:value
        });
    };
    const onReset = () => {
        setInput({
            name : '',
            nickname: '',
        });
    };
    return (
        <div>
            <input name="name" placeholder={"이름"} onChange={onChange} value={name}/>
            <input name={"nickname"} placeholder={"닉네임"} onChange={onChange} value={nickname}/>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}