import React, { useRef, useState } from 'react';
import UserList2 from './Day-3/UserList2';
import CreateUser from './Day-3/CreateUser';

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    // 사용할 빈 변수 useState로 생성
    const { username, email } = inputs;
    // 그걸 inputs로 맵핑
    const onChange = e => {
        //todo 화살표함수 한 번 더 봐야할듯(1/9)
        //todo 이부분 전체적으로 한번 더 봐야할듯(1/9)
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        //todo onCreate 함수 타는거 보고싶다(1/9)
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    };
    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList2 testusers={users} />
        </>
    );
}

export default App;