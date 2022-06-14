import React from "react";

//
const NewsItem = ({ news }) => {
  //
  const { title, published_date, excerpt, link, media } = news;
  return (
    <>
      {media && (
        <div className="thumnail">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={media} alt="thumnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{excerpt}</p>
        <p className="Newstime">{published_date}</p>
      </div>
    </>
  );
};
export default NewsItem;
