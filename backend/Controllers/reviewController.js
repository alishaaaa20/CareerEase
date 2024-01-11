import Review from "../models/ReviewSchema.js";
import Artist from "../models/ArtistSchema.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json({ success: true, message: "Successful", data: reviews });
    } catch (err) { // Include the error parameter to properly handle errors
        res.status(404).json({ success: false, message: "Not found", error: err });
    }
};

// Create review
export const createReview = async (req, res) => {
    if (!req.body.artist) req.body.artist = req.params.artistId;
    if (!req.body.user) req.body.user = req.params.userId;

    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();

        await Artist.findByIdAndUpdate(req.body.artist, {
            $push: { reviews: savedReview._id },
        });

        res.status(200).json({ success: true, message: "Review submitted", data: savedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
