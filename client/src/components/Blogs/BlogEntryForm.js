import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory } from "react-router-dom";
import DirtRoad from "../../style/images/DirtRoad.jpg";

function BlogEntryForm({ setBlogsArray }) {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [blogEntry, setBlogEntry] = useState("");
  const history = useHistory();

  function SubmitButton() {
    if (title && thumbnail && blogEntry.length > 30) {
      return <button type="submit">Submit</button>;
    } else {
      return null;
    }
  }
  function submitNewBlog(e) {
    e.preventDefault();
    const newBlogObj = {
      title: title,
      blog_entry: blogEntry,
      thumbnail: thumbnail,
      user_id: 19,
    };

    fetch("/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlogObj),
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogsArray((prev) => [...prev, data]);
      });

    setTitle("");
    setThumbnail("");
    setBlogEntry("");
    history.push("/blogs");
  }

  const newBlogIntroBanner = (
    <div className="blog-page-intro">
      <span className="intro-overlay">
        <motion.h2
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          Write Your Story Today
        </motion.h2>
        <motion.p
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeIn" }}
        >
          We Would Love to Hear From You
        </motion.p>
      </span>
      <div className="blog-intro-banner">
        <img src={DirtRoad} loading="lazy" alt="open road" />
      </div>
    </div>
  );

  return (
    <div className="new-blog-container">
      <div className="new-blog-head">{newBlogIntroBanner}</div>

      <motion.form
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        onSubmit={submitNewBlog}
      >
        <label>Blog Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Thumbnail</label>
        <input
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        ></input>
        <label>Blog Entry</label>
        {/* <textarea
          value={blogEntry}
          onChange={(e) => setBlogEntry(e.target.value)}
        ></textarea> */}
        <span>
          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();
              setBlogEntry(data);
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />
        </span>

        {/* <button type="submit">Submit</button> */}
        <SubmitButton />
      </motion.form>
    </div>
  );
}

export default BlogEntryForm;
