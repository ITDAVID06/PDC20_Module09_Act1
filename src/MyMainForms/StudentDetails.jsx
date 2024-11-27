import React, { useEffect, useState } from 'react';

const StudentDetails = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    // Fetch users from the server
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost/pdc20/get_user.php', {
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
            <h2 className="text-center">Student Details</h2>
            <div className="card shadow-sm border-0 mt-3">
                <div className="card-body">
                    {users.length > 0 ? (
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Student ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>DOB</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Program</th>
                                    <th>Year Level</th>
                                    {/* <th>GPA</th>
                                    <th>Hobbies</th>
                                    <th>Skills</th>
                                    <th>Notes</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.studentId}>
                                        <td>{user.studentId}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>{user.city}</td>
                                        <td>{user.program}</td>
                                        <td>{user.yearLevel}</td>
                                        {/* <td>{user.gpa}</td>
                                        <td>{user.hobbies}</td>
                                        <td>{user.skills}</td>
                                        <td>{user.notes}</td> */}
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

export default StudentDetails;
