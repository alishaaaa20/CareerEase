// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import your CSS file

const Dashboard = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [artistCount, setArtistCount] = useState(0);

  useEffect(() => {
    axios.get('/api/customers/count')
      .then(response => {
        setCustomerCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching customer count:', error);
      });

    axios.get('/api/makeup-artists/count')
      .then(response => {
        setArtistCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching artist count:', error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat">
          <p>Total Customers</p>
          <p className="count">{customerCount}</p>
        </div>
        <div className="stat">
          <p>Total Makeup Artists</p>
          <p className="count">{artistCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
