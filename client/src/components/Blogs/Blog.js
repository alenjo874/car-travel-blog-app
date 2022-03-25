import React from "react";

function Blog({
  id,
  title,
  blog_entry,
  thumbnail,
  like,
  changeBackToBlogDispaly,
}) {
  return (
    <div>
      {title}
      <button onClick={changeBackToBlogDispaly}>Back</button>
    </div>
  );
}

export default Blog;
