import React, { useEffect, useState } from "react";
import "./QA.css";

const dummyComments = [
  {
    body: "one",
    comments: [],
  },
  {
    body: "two",
    comments: [],
  },
  {
    body: "three",
    comments: [],
  },
];
const QA = () => {
  
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await fetch("/api/comments");
      const commentsData = await res.json();
      setComments(commentsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const onComment = async (newComment) => {
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (res.ok) {
        // Update comments state or handle the response as needed
        const updatedComments = await res.json();
        setComments(updatedComments);
      } else {
        console.log("Failed to add comment");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center text-primaryColor">
          Have any questions?
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Here we are with your answer.
        </p>
        <CommentInput onComment={onComment} />
        <div className="flex flex-col gap-4 mt-10">
          {comments.map((comment) => (
            <CommentItem comment={comment} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CommentItem = ({ comment }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState(comment.comments);
  const onComment = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };
  return (
    <div className=" flex flex-col border-[1px] border-zinc-200 rounded-md p-3 my-4">
      <span> {comment.body}</span>
      {isReplying ? (
        <button
          className="border-[2px] p-1 sm:w-fit bg-primaryColor w-24 rounded-3xl text-white"
          onClick={() => setIsReplying(false)}
        >
          Cancel
        </button>
      ) : (
        <button
          className="border-[2px] bg-primaryColor p-1 sm:w-fit rounded-3xl  w-48 text-white "
          onClick={() => setIsReplying(true)}
        >
          Reply
        </button>
      )}

      {isReplying && <CommentInput onComment={onComment} />}
      <div className="flex flex-col gap-3">
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </div>
    </div>
  );
};

const CommentInput = ({ onComment }) => {
  const [commentBody, setCommentBody] = useState("");
  return (
    <div className="flex flex-col mt-4">
      <input
        type="text"
        value={commentBody}
        placeholder="leave your queries here..."
        className="border-[1px] border-zinc-400 p-4 w-full rounded-full"
        onChange={(event) => setCommentBody(event.target.value)}
      />
      <button
        className="btn rounded-3xl sm:w-fit  mb-7 "
        onClick={() => {
          onComment({ body: commentBody, comments: [] });
          setCommentBody("");
        }}
      >
        Comment
      </button>
    </div>
  );
};

export default QA;
