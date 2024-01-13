import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Userdashboard.css";
import { AuthContext } from "../../context/AuthContext";
import api from "../../utils/api";

const UserDashboard = () => {
  const [userData, setUserData] = useState({ appointments: [] });
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && user._id) {
          // Check if user and user._id are defined
          const { data } = await api.get(`/users/${user._id}`);
          console.log(data.data);
          if (data.error) {
            console.log(data.error);
          }
          setUserData(data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>Student Profile</h2>
      <div className="profile-details">
        {user && (
          <div className="user-info">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
