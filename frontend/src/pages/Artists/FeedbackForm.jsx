import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // Later we will use an API to submit the review.
  };

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-base font-semibold mb-4 mt-0">
          How would you rate the overall service?*
        </h3>
        <div>
          {[...Array(5).keys()].map((index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= (rating || hover)
                    ? "text-yellowColor"
                    : "text-textColor"
                } bg-transparent border-none outline-none text-xl cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(0)}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-headingColor text-base font-semibold mb-4 mt-0">
          Share your feedback*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline-none outline-primaryColor w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Write your feedback here..."
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn"
        onClick={handleSubmitReview}
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
