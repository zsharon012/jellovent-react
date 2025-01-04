import React from 'react';

export default function UserCard({ user }) {
    return (
        <div class="card">
            <h2>{user.id}</h2>
            <h2>{user.firstName}</h2>
            <h2>{user.lastName}</h2>
            <h2>{user.profilePicture}</h2>
            <h3>{user.email}</h3>
            <h3>{user.bio}</h3>
            <h3>{user.major}</h3>
            <h3>{user.graduationYear}</h3>
            <h3>{user.created_at}</h3>
        </div>
    )
}