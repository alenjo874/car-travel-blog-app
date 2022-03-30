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
  const newsTestObj = {
    source: {
      id: null,
      name: "New York Times",
    },
    author: "Jonah E. Bromwich",
    title:
      "Ex-Party Producer Charged in $2.7 Million Bitcoin-Laundering Scheme",
    description:
      "Thomas Spieker’s clients included dark-web drug dealers and a cellphone-hacking identity thief, prosecutors said.",
    url: "https://www.nytimes.com/2022/03/24/nyregion/thomas-spieker-bitcoin-scheme.html",
    urlToImage:
      "https://static01.nyt.com/images/2022/03/24/nyregion/24ny-bitcoin1/24ny-bitcoin1-facebookJumbo.jpg",
    publishedAt: "2022-03-24T22:50:30Z",
    content:
      "Mr. Spiekers most prominent customer, whom he described as his whale client, was the Eastern European organized crime member, prosecutors said. Mr. Spieker laundered $620,000 for the client, they sai… [+2755 chars]",
  };
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
