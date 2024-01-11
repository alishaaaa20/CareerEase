import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Userdashboard.css";
import { AuthContext } from "../../context/AuthContext";
import api from "../../utils/api";

const UserDashboard = () => {
  const [userData, setUserData] = useState({appointments: []});
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API.
    api.get(`/users/${user._id}`).then(({data}) => {
     
      console.log(data.data);
      if (data.error) {
        console.log(data.error);
      }
      setUserData(data.data);
      setLoading(false);
    });
  }, [user._id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="profile-photo">
          <img src={user.photo} alt="User" />
        </div>
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
        </div>
      </div>
      <div className="appointments">
        <h3>Appointments</h3>
        <ul>
          {userData.appointments.map(appointment => (
            <li key={appointment._id}>{appointment.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
