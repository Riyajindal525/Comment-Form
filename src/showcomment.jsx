import { useState } from 'react';
import './showcomment.css';
import CommentForm from './Comments';

export default function ShowComment() {
  const [comment, setComment] = useState([
    {
      userName: "riya",
      Ratings : 5,
      Remarks : "It was a good movie"
    }
  ]);

  const addNewComment = (newComment) => {
    setComment((currComments) => [...currComments, newComment]);
    console.log("Added comment:", newComment);
  };

  return (
    <>
      <h2>All Comments</h2>

      {comment.map((c, index) => (
        <div className="comments" key={index}>
          <span>{c.Remarks}</span> &nbsp;
          <span>(Rating = {c.Ratings})</span> <br />
          <span>@{c.userName}</span>
          <hr />
        </div>
      ))}

      <CommentForm addNewComment={addNewComment} />
    </>
  );
}
