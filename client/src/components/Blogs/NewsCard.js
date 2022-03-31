import React from "react";

function NewsCard({ title, summary, media, rights, link }) {
  const summaryTeaser = summary.split(" ").slice(0, 20).join(" ");

  return (
    <div className="news-card-container">
      <div className="news-head">
        <a
          className="news-thumbnail"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <img src={media} alt="news thumbnail" />
        </a>
      </div>
      <div className="news-body">
        <span>
          <b>{title}</b>
        </span>
        <p className="rights">{rights} </p>
        <p>{summaryTeaser}...</p>
        <a href={link} target="_blank" rel="noreferrer">
          <button>Read More</button>
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
