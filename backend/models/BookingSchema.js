import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    artist: {
      type: mongoose.Types.ObjectId,
      ref: "Makeup Artist",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    servicePrice: { type: String, required: true },
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
