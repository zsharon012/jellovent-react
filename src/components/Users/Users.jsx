import React from 'react';
import UserCard from "../UserCard.jsx";
import useUsers from "../hooks/UseUsers.jsx"

export default function FetchData() {

    const { users, loading } = useUsers();

    return loading ? (
        <p>Loading...</p>
    ) : (
        <div>
            <ul>
                {users.map((list) => (
                    <li key={list.id}>
                        <UserCard user={list} />
                    </li>
                ))}
            </ul>
        </div>
    )
}