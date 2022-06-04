import React from "react";

// NewsApiComponent.jsx에서 받아온 프로퍼티 article을 인자로 받는 펑셔널 컴포넌트
const NewsItem = ({ news }) => {
  // 제목, 시간, 설명, 링크, 이미지를 프로퍼티에서 받아옴
  const { title, published_date, excerpt, url, media } = news;
  console.log(news);
  return (
    <>
      {media && (
        <div className="thumnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={media} alt="thumnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
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
