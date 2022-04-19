import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PageHome() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseJson = await response.json();
    setPosts(responseJson);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const postElements = posts.map(post => {
    return (
      <div key={post.id}>
        <h4>
          <Link to={`post/${post.id}`}>{post.title}</Link>
          <p>{post.body}</p>
          <hr />
        </h4>
      </div>
    );
  });

  return (
    <div>
      <h3>Hello Nazirulhak!</h3>
      {postElements}
      {/* <p>
        <Link to="/about/myself">Myself</Link>
      </p>
      <p>
        <Link to="/about/history">History</Link>
      </p>
      <Switch>
        <Route path="/about/myself">
          <h3>Myself</h3>
          <p>เรื่องของผม</p>
        </Route>
        <Route path="/aboute/history">
          <h3>History</h3>
          <p>ประวัติศาตร์</p>
        </Route>
      </Switch>
      <Route
        path="/about"
        render={() => <Redirect to="/about/myself" />}
      ></Route> */}
    </div>
  );
}
