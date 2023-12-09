import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users); // Access the 'users' array in the API response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="text-center">User Data Table</h1>
    <div className="container">
      <div className="table-container">
        <Table striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              {/* Add more columns if needed */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                {/* Add more cells if needed */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  </div>
  );
}

export default App;
