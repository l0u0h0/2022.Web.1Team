import React from "react";

const NewsItem = ({ article }) => {
  const { title, publishedAt, description, url, urlToImage } = article;
  return (
    <>
      {urlToImage && (
        <div className="thumnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <p className="Newstime">{publishedAt}</p>
      </div>
    </>
  );
};
export default NewsItem;
