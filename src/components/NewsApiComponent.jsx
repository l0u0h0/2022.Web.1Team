import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../js/NewsItem";

export default function NewsApi() {
  // NewsApi에서 받아온 값을 저장할 State, 초기값 null
  const [articles, setArticles] = useState(null);
  // Api를 불러오는 상태에 대한 State, 초기값 false
  const [loading, setLoading] = useState(false);

  // Render 되는 시점에서 Api를 호출
  useEffect(() => {
    // async, await로 비동기 호출
    const fetchData = async () => {
      // loading state true
      setLoading(true);
      try {
        // axios.get으로 api 호출
        const response = await axios.get(
          "https://newsapi.org/v2/everything?pageSize=3&page=1&q=전기차&top-headlines?country=kr&apiKey=6b3e1df4f86f4c4ebae8f5389c7d8ba6"
        );
        // 받아온 데이터 articles state에 저장
        setArticles(response.data.articles);
        // 에러 발생 시 콘솔에 출력
      } catch (error) {
        console.log(error);
      }
      // 불러오기가 끝나면 loading state false
      setLoading(false);
    };
    // 함수 실행
    fetchData();
  }, []);
  // state 로딩 값이 true면 출력
  if (loading) {
    return <div>로딩중.....</div>;
  }
  // articles에 null 값 있는지 검사
  if (!articles) {
    return null;
  }
  // map 이용해 NewsItem Component를 하나씩 실행
  return (
    <div className="container_news">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}
