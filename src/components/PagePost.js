import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function PagePost() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  async function getPost(thePostId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${thePostId}`
    );
    const responseJson = await response.json();
    setPost(responseJson);
  }

  async function getComments(thePostId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/1/comments/${thePostId}/comments`
    );
    const responseJson = await response.json();
    setComments(responseJson);
  }

  useEffect(() => {
    getPost(postId);
    getComments(postId);
  }, [postId]);

  const commentElemets = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h4>{comment.email}</h4>
        <p>{comment.body}</p>
        <hr />
        <h4>{comment.length} comments</h4>
        {commentElemets}
      </div>
    );
  });

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
