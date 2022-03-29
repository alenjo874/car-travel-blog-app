import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import parse from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Blog({
  id,
  title,
  blog_entry,
  thumbnail,
  like,
  changeBackToBlogDispaly,
  user,
  create_date,
  handleBlogUpdate,
  handleDeleteBlog,
  showNextBlogPage,
  blogsArray,
  editBlog,
  setEditBlog,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newBlogEntry, setNewBlogEntry] = useState(blog_entry);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleEditBlog() {
    setEditBlog((prev) => !prev);
  }

  function submitEditBlog(e) {
    e.preventDefault();
    handleBlogUpdate(id, newTitle, newBlogEntry);
    setEditBlog(false);
  }

  function deleteBlog(e) {
    e.preventDefault();
    fetch(`/blogs/${id}`, {
      method: "DELETE",
    });
    handleDeleteBlog(id);
  }

  const editBlogForm = (
    <motion.form
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      exit={{ y: -5, opacity: 0 }}
    >
      <label>Title</label>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      ></input>
      <label>Entry</label>
      {/* <textarea
        value={newBlogEntry}
        onChange={(e) => setNewBlogEntry(e.target.value)}
      ></textarea> */}
      <CKEditor
        editor={ClassicEditor}
        data={blog_entry}
        onReady={(editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setNewBlogEntry(data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
      <button onClick={submitEditBlog}>Submit</button>
      <button onClick={deleteBlog}>Delete Blog</button>
    </motion.form>
  );

  const editBtn = <button onClick={handleEditBlog}>Edit</button>;
  const cancelEditBtn = <button onClick={handleEditBlog}>Cancel</button>;
  const displayUserCategories = user.category.split(" ").map((category) => {
    return <p key={uuidv4()}>{category}</p>;
  });

  const blogPageNumber = blogsArray.map((blog) => blog.id).indexOf(id);
  const relatedBlogs = blogsArray.filter((blog) => blog.user.id === user.id);
  const displayRelatedBlogs = relatedBlogs.map((blog) => {
    return <p key={uuidv4()}>{blog.title}</p>;
  });

  return (
    <div className="user-blog-container">
      <div className="user-blog-columns">
        <div className="blog-col left">
          <div className="user-blog-head-btn">
            <button onClick={changeBackToBlogDispaly}>Back</button>
            <em>
              {blogPageNumber + 1} of {blogsArray.length}
            </em>
            <button onClick={showNextBlogPage}>Next</button>
          </div>
          <div className="user-blog-thumbnail">
            <h3>{title}</h3>
            <img src={thumbnail} alt="thumbnail for blog" />
          </div>
          <div className="user-blog-entry">
            <div>
              <p className="created-date">Created At: {create_date}</p>
            </div>
            <div>{parse(blog_entry)}</div>
          </div>

          <div>{editBlog ? cancelEditBtn : editBtn}</div>
          <div className="blog-edit-form-container">
            <AnimatePresence>{editBlog ? editBlogForm : null}</AnimatePresence>
          </div>
        </div>
        <div className="blog-col right">
          <div className="user-blog-info">
            <p className="about-head">About the Author</p>
            <div className="user-profile-picture">
              <img src={user.profile_picture} alt="profile" />
            </div>
            <div className="user-category">
              <p className="about-head">Interests</p>
              <span>{displayUserCategories}</span>
            </div>
            <div>
              <p className="about-head">Related</p>
              <span>
                <b>{displayRelatedBlogs}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
