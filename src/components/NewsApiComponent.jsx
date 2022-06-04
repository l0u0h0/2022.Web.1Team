import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../js/NewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function NewsApi() {
  // NewsApi에서 받아온 값을 저장할 State, 초기값 null
  const [newslist, setNewslist] = useState(null);
  // Api를 불러오는 상태에 대한 State, 초기값 false
  const [load, setLoad] = useState(false);

  // // Render 되는 시점에서 Api를 호출
  // useEffect(() => {
  //   // async, await로 비동기 호출
  //   const callApi = async () => {
  //     // loading state true
  //     setLoad(true);
  //     try {
  //       // axios.get으로 api 호출
  //       const news = await axios.get(
  //         "https://newsapi.org/v2/everything?pageSize=6&page=1&q=전기차&top-headlines?country=kr&apiKey=6b3e1df4f86f4c4ebae8f5389c7d8ba6"
  //       );
  //       // 받아온 데이터 articles state에 저장
  //       setNewslist(news.data.articles);
  //       // 에러 발생 시 콘솔에 출력
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     // 불러오기가 끝나면 loading state false
  //     setLoad(false);
  //   };
  //   // 함수 실행
  //   callApi();
  // }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/search",
      params: {
        q: "전기차",
        lang: "ko",
        sort_by: "relevancy",
        page: "1",
        page_size: "5",
      },
      headers: {
        "x-api-key": "xfvkgp-Pa2JHG3SBqzOqpNdyjsG0Ofa6rkYJz-0ELVU",
      },
    };
    const callApi = async () => {
      // setLoad(true);
      // axios
      //   .request(options)
      //   .then(function (articles) {
      //     setLoad(true);
      //     console.log(articles.data.articles);
      //     setNewslist(articles.data.articles);
      //   })
      //   .catch(function (e) {
      //     if (e.response) {
      //       console.log(e.response.data);
      //       console.log(e.response.status);
      //       console.log(e.response.headers);
      //     } else if (e.request) {
      //       console.log(e.requset);
      //     } else {
      //       console.log(e.message);
      //     }
      //     console.log(e);
      //   });
      // setLoad(false);

      // loading state true
      setLoad(true);
      try {
        // axios.get으로 api 호출
        const news = await axios.request(options);
        // 받아온 데이터 articles state에 저장
        setNewslist(news.data.articles);
        // 에러 발생 시 콘솔에 출력
      } catch (error) {
        console.log(error);
      }
      // 불러오기가 끝나면 loading state false
      setLoad(false);
    };
    callApi();
  }, []);
  // state 로딩 값이 true면 출력
  if (load) {
    return <div>로딩중.....</div>;
  }
  // articles에 null 값 있는지 검사
  if (!newslist) {
    return null;
  }
  // Swiper 라이브러리를 이용해 Swiper 컴포넌트로 Pagination 모듈 생성
  // map 이용해 NewsItem Component를 하나씩 실행
  // url을 이용해 각 뉴스마다 고유한 키 값 생성
  return (
    <div className="container-news">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides
        loop
        autoplay={{ delay: 5000 }}
        pagination={{
          clickable: true,
          el: ".container-news .swiper-pagination",
        }}
      >
        {newslist.map((news) => (
          <SwiperSlide>
            <NewsItem key={news._id} news={news} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="under-news">
        {newslist[0].media && (
          <div className="thumnail">
            <a href={newslist[0].url} target="_blank" rel="noopener noreferrer">
              <img src={newslist[0].media} alt="thumnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a href={newslist[0].url} target="_blank" rel="noopener noreferrer">
              {newslist[0].title}
            </a>
          </h2>
          <p>{newslist[0].excerpt}</p>
          <p className="Newstime">{newslist[0].published_date}</p>
        </div>
      </div>
    </div>
  );
}
