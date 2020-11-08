import "../main/styles.css";
import Comment from "../comment";

import React, { useState } from "react";

function Comments() {
  const [commentVal, setCommentVal] = useState([]);
  const [commentArr, setCommentArr] = useState([]);

  function addComment() {
    if (!commentVal) {
      alert("please input text");
      return;
    }
    let newArray = [...commentArr, commentVal];
    setCommentArr(newArray);
    setCommentVal("");
  }

  return (
    <div>
      <input type="text" onChange={(e) => setCommentVal(e.target.value)} />
      <button onClick={addComment}>Add a comment</button>
      <ul>
        {commentArr.map((item) => (
          <Comment comment={item} />
        ))}
      </ul>
    </div>
  );
}

export default Comments;
