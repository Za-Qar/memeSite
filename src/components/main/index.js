import React, { useState } from "react";
import "./styles.css";

import Comments from "../comments";

function Main({ title, img }) {
  const [likes, setLikes] = useState(0);
  const [toggle, setToggle] = useState("commentsDiv comments");

  function upDownVote(val) {
    let score = likes + val;
    setLikes(score);
  }

  function toggleComments() {
    console.log("hello");
    setToggle("comments");
  }

  return (
    <div className="container">
      <div className="content">
        <h2 className="title">{title}</h2>
        <img src={img} className="img" />
        <button className="comment" onClick={toggleComments}></button>
      </div>

      <div className="upDown">
        <button className="upVote" onClick={() => upDownVote(1)}></button>
        <h3 className="likes">{likes}</h3>
        <button className="downVote" onClick={() => upDownVote(-1)}></button>
      </div>

      <div className={toggle}>
        <Comments />
      </div>
    </div>
  );
}

export default Main;
