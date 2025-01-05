import React from 'react';
import { useMemo } from 'react';

export default function UserCard({ user }) {

    const currentusers = useMemo(() => user, [user]);

    return (
        <div class="card">
            <h2>{currentusers.id}</h2>
            <h2>{currentusers.firstName}</h2>
            <h2>{currentusers.lastName}</h2>
            <h2>{currentusers.profilePicture}</h2>
            <h3>{currentusers.email}</h3>
            <h3>{currentusers.bio}</h3>
            <h3>{currentusers.major}</h3>
            <h3>{currentusers.graduationYear}</h3>
            <h3>{currentusers.created_at}</h3>
        </div>
    )
}