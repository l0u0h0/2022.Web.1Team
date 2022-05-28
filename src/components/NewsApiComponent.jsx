import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../js/NewsItem";

export default function NewsApi() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=전기차&top-headlines?country=kr&apiKey=6b3e1df4f86f4c4ebae8f5389c7d8ba6"
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData(false);
  }, []);
  if (loading) {
    return <div>로딩중.....</div>;
  }
  if (!articles) {
    return null;
  }
  return (
    <div className="container_news">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}
