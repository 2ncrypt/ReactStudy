import React, { useRef } from 'react';
import UserList from './Day-3/UserList2';

function App() {
    const users = [
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
    ];

    const nextId = useRef(4);
    const onCreate = () => {
        // 나중에 구현 할 배열에 항목 추가하는 로직
        // ..

        nextId.current += 1;
    };
    return <UserList testusers={users} />;
}

export default App;