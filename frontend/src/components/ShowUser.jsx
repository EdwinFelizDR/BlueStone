import React, { useEffect, useState } from 'react';

function ShowUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/users');
        const data = await response.json();
        setUsers(data); // Update the state with the fetched data
        console.log(data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address1</th>
              <th>Address2</th>
              <th>City</th>
              <th>State</th>
              <th>Postal Code</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address1}</td>
                <td>{user.address2}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.postalCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowUser;