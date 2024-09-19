import React, { useEffect, useState } from 'react';

function ShowUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/users');
        const data = await response.json();
        setUsers(data); // Update the state with the fetched data
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
              <tr key={user.customer_id}>
                <td>{user.customer_id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.Address1}</td>
                <td>{user.Address2}</td>
                <td>{user.City}</td>
                <td>{user.State}</td>
                <td>{user.PostalCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowUser;