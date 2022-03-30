import React from "react";

function NewsCard({ title, summary, media, rights, link }) {
  return (
    <div className="news-card-container">
      <div className="news-head">
        <span>
          <b>{title}</b>
          <p>{rights} </p>
        </span>
        <a className="news-thumbnail" href={link} target="_blank">
          <img src={media} />
        </a>
      </div>
      <div className="news-body">
        <p>{summary} </p>
      </div>
    </div>
  );
}

export default NewsCard;
