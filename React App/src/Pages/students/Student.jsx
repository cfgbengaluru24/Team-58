import React, { useState } from 'react';
import './student.css';

const Student = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data] = useState([
    { id: 1, name: 'Student A', status: 'Connected' },
    { id: 2, name: 'Student B', status: 'In Progress' },
    { id: 3, name: 'Student C', status: 'Not Started' }
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>NGO University Dashboard</h1>
      <div class="container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      </div>
      <table className="university-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
