import React from "react";

const CreateUser = ({username, email ,onChange, onCreate}) => {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>Submit</button>
        </div>
    );
};
//컴포넌트의 props가 바뀌지 않으면 리렌더링을 방지 React.mmo
export default React.memo(CreateUser);