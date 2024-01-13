// // SinglePost.jsx

// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Avatar,
//   IconButton,
//   Typography,
//   Divider,
//   Box,
//   Button,
// } from "@mui/material";
// import { red } from "@mui/material/colors";
// import { Link, useParams } from "react-router-dom";
// //import TextareaAutosize from "@mui/base/TextareaAutosize";
// import moment from "moment";
// import axios from "axios";
// //import { toast } from "react-toastify";
// import CommentList from "../../components/PnC/CommentList";
// import { io } from "socket.io-client";
// import Loader from "../../components/PnC/Loader"; // Make sure to import Loader

// // const socket = io("/", {
// //   reconnection: true,
// // });

// const SinglePost = () => {
//   // const [title, setTitle] = useState("");
//   // const [content, setContent] = useState("");
//   // const [image, setImage] = useState("");
//   // const [createdAt, setCreatedAt] = useState("");
//   // const [loading, setLoading] = useState(false);
//   // const [comment, setComment] = useState("");
//   // const [comments, setComments] = useState([]);
//   // const [commentsRealTime, setCommentsRealTime] = useState([]);

//   // const { id } = useParams();

//   // // fetch single post
//   // const displaySinglePost = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const { data } = await axios.get(`/api/post/${id}`);
//   //     setTitle(data.post.title);
//   //     setContent(data.post.content);
//   //     setImage(data.post.image.url);
//   //     setCreatedAt(data.post.createdAt);
//   //     setLoading(false);
//   //     setComments(data.post.comments);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   displaySinglePost();
//   // }, []);

//   // useEffect(() => {
//   //   socket.on("new-comment", (newComment) => {
//   //     setCommentsRealTime(newComment);
//   //   });
//   // }, []);

//   // // add comment
//   // const addComment = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await axios.put(`/api/comment/post/${id}`, { comment });
//   //     if (data.success === true) {
//   //       setComment("");
//   //       toast.success("comment added");
//   //       socket.emit("comment", data.post.comments);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //     toast.error(error);
//   //   }
//   // };

//   // let uiCommentUpdate =
//   //   commentsRealTime.length > 0 ? commentsRealTime : comments;

//   return (
//     <>
//       <Box
//         sx={{
//           bgcolor: "#fafafa",
//           display: "flex",
//           justifyContent: "center",
//           pt: 4,
//           pb: 4,
//           minHeight: "100vh",
//         }}
//       >
//         {loading ? (
//           <Loader />
//         ) : (
//           <>
//             <Card sx={{ maxWidth: 1000, height: "100%" }}>
//               <CardHeader
//                 avatar={
//                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                     R
//                   </Avatar>
//                 }
//                 action={
//                   <IconButton aria-label="settings">
//                     {/* <MoreVertIcon /> */}
//                   </IconButton>
//                 }
//                 title={title}
//                 subheader={moment(createdAt).format("MMMM DD, YYYY")}
//               />
//               <CardMedia
//                 component="img"
//                 height="194"
//                 image={image}
//                 alt={title}
//               />
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                   <Box
//                     component="span"
//                     dangerouslySetInnerHTML={{ __html: content }}
//                   ></Box>
//                 </Typography>
//                 <Divider variant="inset" />
//                 {comments.length === 0 ? (
//                   ""
//                 ) : (
//                   <Typography variant="h5" sx={{ pt: 3, mb: 2 }}>
//                     Comments:
//                   </Typography>
//                 )}
//                 {uiCommentUpdate.map((comment) => (
//                   <CommentList
//                     key={comment._id}
//                     name={comment.postedBy.name}
//                     text={comment.text}
//                   />
//                 ))}
//                 (
//                 <>
//                   <Box sx={{ pt: 1, pl: 3, pb: 3, bgcolor: "#fafafa" }}>
//                     <h2>Add your comment here!</h2>
//                     {/* <form onSubmit={addComment}> */}
//                     <form>
//                       <TextareaAutosize
//                         onChange={(e) => setComment(e.target.value)}
//                         value={comment}
//                         aria-label="minimum height"
//                         minRows={3}
//                         placeholder="Add a comment..."
//                         style={{ width: 500, padding: "5px" }}
//                       />
//                       <Box sx={{ pt: 1 }}>
//                         <Button type="submit" variant="contained">
//                           Comment
//                         </Button>
//                       </Box>
//                     </form>
//                   </Box>
//                 </>
//                 ) : (
//                 <>
//                   <Link to="/log  in"> Log In to add a comment</Link>
//                 </>
//                 )
//               </CardContent>
//             </Card>
//           </>
//         )}
//       </Box>
//     </>
//   );
// };

// export default SinglePost;
import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";
import moment from "moment";

const SinglePost = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#fafafa",
          display: "flex",
          justifyContent: "center",
          pt: 4,
          pb: 4,
          minHeight: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 1000, height: "100%" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title={"Title"}
            subheader={moment().format("MMMM DD, YYYY")}
          />
          <CardMedia component="img" height="194" image={"#"} alt={"Title"} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                dangerouslySetInnerHTML={{ __html: "Content" }}
              ></Box>
            </Typography>
            <Divider variant="inset" />
            <Typography variant="h5" sx={{ pt: 3, mb: 2 }}>
              Comments:
            </Typography>
            <Box sx={{ pt: 1, pl: 3, pb: 3, bgcolor: "#fafafa" }}>
              <h2>Add your comment here!</h2>
              <form>
                <textarea
                  aria-label="minimum height"
                  rows={3}
                  placeholder="Add a comment..."
                  style={{ width: 500, padding: "5px" }}
                />
                <Box sx={{ pt: 1 }}>
                  <Button type="submit" variant="contained">
                    Comment
                  </Button>
                </Box>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SinglePost;
