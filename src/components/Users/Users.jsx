import React from 'react';
import { useState, useEffect } from 'react';
import UserCard from "../UserCard.jsx";

export default function FetchData() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users")
                .catch((err) => console.log("fetching user data failed"));
            const data = await response.json();
            setLoading(false);
            setUsers(data);
        };

        fetchUsers();
    }, []);

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