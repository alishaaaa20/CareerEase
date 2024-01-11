import React from "react";
import Booking from "./Booking"; // Import the Booking component

const BookingPage = () => {
  // Assume you have a booking object from your API or state
  const booking = {
    servicePrice: "50",
    appointmentDate: new Date(),
    status: "pending",
    isPaid: true,
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <Booking booking={booking} /> {/* Pass the booking object to the Booking component */}
    </div>
  );
};

export default BookingPage;
