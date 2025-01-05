import { useState, useEffect } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("http://localhost:3005/api/users")
                .catch((err) => console.log("fetching user data failed"));
            const data = await response.json();
            setLoading(false);
            setUsers(data);
        };
        
        fetchUsers();
    }, []);
    return { users, loading };
}

export default useUsers;