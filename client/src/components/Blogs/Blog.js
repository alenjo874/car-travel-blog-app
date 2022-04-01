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
  showRelatedBlog,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newBlogEntry, setNewBlogEntry] = useState(blog_entry);
  const [deleteBlogConfirm, setDeleteBlogConfirm] = useState(false);
  const [imgUrlInvalid, setImgUrlInvalid] = useState(false);

  function handleImgError() {
    setImgUrlInvalid(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleEditBlog() {
    setNewTitle(title);
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
    setDeleteBlogConfirm(false);
  }

  function showDeleteConfirm(e) {
    e.preventDefault();
    setDeleteBlogConfirm(true);
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

      <span>
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
      </span>
      <button onClick={submitEditBlog}>Submit</button>
      <button onClick={showDeleteConfirm}>Delete Blog</button>
    </motion.form>
  );

  const editBtn = <button onClick={handleEditBlog}>Edit</button>;
  const cancelEditBtn = <button onClick={handleEditBlog}>Cancel</button>;
  // const displayUserCategories = user.category.split(" ").map((category) => {
  //   return <p key={uuidv4()}>{category}</p>;
  // });

  const blogPageNumber = blogsArray.map((blog) => blog.id).indexOf(id);
  const relatedBlogs = blogsArray.filter((blog) => blog.user.id === user.id);
  const displayRelatedBlogs = relatedBlogs.map((blog) => {
    return (
      <div className="read-more-card">
        <div className="read-more-img">
          <img
            src={blog.thumbnail}
            alt="article thumbnail"
            onClick={(e) => showRelatedBlog(blog.id)}
          />
        </div>
        <p key={uuidv4()} onClick={(e) => showRelatedBlog(blog.id)}>
          {blog.title}
        </p>
      </div>
    );
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
            {imgUrlInvalid ? null : (
              <img
                src={thumbnail}
                alt="thumbnail for blog"
                onError={handleImgError}
              />
            )}
          </div>
          <div className="user-blog-entry">
            <div>
              <p className="created-date">Created At: {create_date}</p>
            </div>
            <div>{parse(blog_entry)}</div>
          </div>

          <div className="editCancelBtn">
            {editBlog ? cancelEditBtn : editBtn}
          </div>
          <div className="blog-edit-form-container">
            <AnimatePresence>{editBlog ? editBlogForm : null}</AnimatePresence>
          </div>
          <AnimatePresence>
            {deleteBlogConfirm ? (
              <div className="update-pro-popup">
                <motion.div
                  className="submit-confirm confirm-delete"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.25,
                      type: "show",
                      ease: "easeIn",
                    },
                  }}
                  exit={{
                    y: "10%",
                    opacity: 0,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                >
                  <p>Are you sure?</p>
                  <div>
                    <button onClick={deleteBlog}>Yes</button>
                    <button onClick={(e) => setDeleteBlogConfirm(false)}>
                      No
                    </button>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
        </div>
        <div className="blog-col right">
          <div className="user-blog-info">
            <div className="user-about user-sidebar">
              <p className="about-head">About the Author</p>
              <div className="user-profile-picture">
                <img src={user.profile_picture} alt="profile" />
              </div>
            </div>
            <div className="user-category  user-sidebar">
              <p className="about-head">Bio</p>
              <span>
                <p>{user.about}</p>
              </span>
            </div>
            <div className="user-related  user-sidebar">
              <p className="about-head">Read More</p>
              <span>
                {displayRelatedBlogs[0] ? displayRelatedBlogs[0] : null}
                {displayRelatedBlogs[1] ? displayRelatedBlogs[1] : null}
                {displayRelatedBlogs[2] ? displayRelatedBlogs[2] : null}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
