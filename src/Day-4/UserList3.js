import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    // useEffect(() => {
    //     console.log(user);
    // });
    useEffect(() => {
        console.log(`user${user.id} 값이 설정됨`);
        console.log(user);
        return () => {
            console.log(`user${user.id} 가 바뀌기 전..`);
            console.log(user);
        };
    }, [user]);
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ testusers, onRemove, onToggle }) {
    return (
        <div>
            {testusers.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;