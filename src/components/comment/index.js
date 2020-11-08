import React, { useState } from "react";

function Comment({ comment }) {
  console.log(comment);
  return (
    <div>
      <li>{comment}</li>
    </div>
  );
}

export default Comment;
