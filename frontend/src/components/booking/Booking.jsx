import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [artistId, setArtistId] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  useEffect(() => {
    // Fetch bookings from the API when the component mounts
    axios.get('/api/bookings').then((response) => {
      setBookings(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to create a new booking
    axios
      .post('/api/bookings', {
        artist: artistId,
        servicePrice: servicePrice,
        appointmentDate: appointmentDate,
      })
      .then((response) => {
        // Update the bookings state with the new booking
        setBookings([...bookings, response.data]);
        // Clear the form fields
        setArtistId('');
        setServicePrice('');
        setAppointmentDate('');
      })
      .catch((error) => {
        console.error('Error creating booking: ', error);
      });
  };

  return (
    <div>
      <h1>Bookings</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Artist:</label>
          <input
            type="text"
            className="form-control"
            value={artistId}
            onChange={(e) => setArtistId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Service Price:</label>
          <input
            type="text"
            className="form-control"
            value={servicePrice}
            onChange={(e) => setServicePrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Appointment Date:</label>
          <input
            type="date"
            className="form-control"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </form>

      <h2>Existing Bookings:</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            Artist: {booking.artist}, Service Price: {booking.servicePrice}, Date: {booking.appointmentDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;

