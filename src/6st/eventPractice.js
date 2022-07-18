import React, {useState} from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const {username , message} = form;
    // console.log('1111111 : ', form.username);
    const onChange = e => {
        const nextForm ={
            ...form,
            [e.target.name] : e.target.value
        };
        console.log('e.target.name : ' , e.target.name , 'e.target.value : ', e.target.value)
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ':' + message);
        // setUsername('');
        // setMessage('');
    };

return (
    <div>
        <h1>이벤트 연습</h1>
        <input
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChange}
        />
        <input
            type="text"
            name="message"
            placeholder="Any thing"
            value={message}
            onChange={onChange}
        />
        <button onClick={onClick}>확인</button>
    </div>

    );
};
export default EventPractice;