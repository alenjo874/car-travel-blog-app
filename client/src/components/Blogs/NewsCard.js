import React from "react";

function NewsCard(
  {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  }
) {

  return (
    <div className="news-card-container">
      <div className="news-head">
        <span>
          <b>{title} </b>
          <p>{source.name} </p>
        </span>
        <a className="news-thumbnail" href={url} target="_blank">
          <img src={urlToImage} />
        </a>
      </div>
      <div className="news-body">
        <p>{description} </p>
      </div>
    </div>
  );
}

export default NewsCard;
