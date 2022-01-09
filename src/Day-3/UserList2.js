import React from "react";

function User({ user }) {
    return (
        <div>
        <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList2({testusers}) {
    return (
        <div>
            {testusers.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}
export default UserList2;