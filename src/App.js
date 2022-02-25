import React, {useCallback, useMemo, useRef, useState} from 'react';
import UserList from './5st/UserList4';
import CreateUser from './3st/CreateUser';


function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const onChange = useCallback(
    e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    },[inputs]
);
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    const nextId = useRef(4);
    const onCreate = useCallback(() => {
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
    },[users, username, email]
);
    //함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다는 것 입니다. 만약에 deps 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할때 가장 최신 값을 참조 할 것이라고 보장 할 수 없습니다. props 로 받아온 함수가 있다면, 이 또한 deps 에 넣어주어야 해요.
    const onRemove = useCallback( id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
    },
        [users]);

    const onToggle = useCallback( id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    },[users]
);
    //useMemo 첫번째 파라미터는 어떻게 연산할지 정의해주는 함수, 두번째는 deps 배열
    const count = useMemo(() =>  countActiveUsers(users), [users]);
    // https://react.vlpt.us/basic/20-useReducer.html
    return (
        <>

            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App;