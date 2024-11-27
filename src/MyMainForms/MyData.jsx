import React, { useEffect, useState } from 'react';

const MyData = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    // Fetch users from the server
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost/pdc20/get_user_details.php', {
                method: 'GET',
            });
            const data = await response.json();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            setError(error);
        }
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">User Details</h2>
            <div className="card shadow-sm border-0 mt-3">
                <div className="card-body">
                    {users.length > 0 ? (
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Contact No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.ID}>
                                        <td>{user.ID}</td>
                                        <td>{user.Name}</td>
                                        <td>{user.Gender}</td>
                                        <td>{user.ContactNo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-center">No data available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyData;
