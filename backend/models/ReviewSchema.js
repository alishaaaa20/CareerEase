import mongoose from "mongoose";
import Artist from "./ArtistSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    artist: {
      type: mongoose.Types.ObjectId,
      ref: "Makeup Artist",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

reviewSchema.statics.calcAverageRatings = async function (artistId) {
  // this points to current review

  const stats = await this.aggregate([
    {
      $match: { artist: artistId },
    },
    {
      $group: {
        _id: "$artist",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  await Artist.findByIdAndUpdate(artistId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  });
};

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.artist);
});

export default mongoose.model("Review", reviewSchema);
