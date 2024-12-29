import React from 'react';
import { useState, useEffect } from 'react';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
    major: string;
    graduationYear: string;
    profilePicture: string;
    created_at: string;
}

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
                    <li>
                        {list.id}{list.firstName}{list.lastName}{list.email}{list.bio}{list.major}{list.graduationYear}{list.profilePicture}{list.created_at}
                    </li>
                ))}
            </ul>
        </div>
    )
}