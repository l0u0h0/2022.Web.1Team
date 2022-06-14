import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../js/NewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function NewsApi() {
  //
  const [newslist, setNewslist] = useState(null);
  //
  const [load, setLoad] = useState(false);

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
      //
      setLoad(true);
      try {
        //
        const news = await axios.request(options);
        //
        setNewslist(news.data.articles);
        //
      } catch (error) {
        console.log(error);
      }
      //
      setLoad(false);
    };
    callApi();
  }, []);
  //
  if (load) {
    return <div>로딩중.....</div>;
  }
  //
  if (!newslist) {
    return null;
  }
  //
  //
  //
  return (
    <div className="container-news">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides
        loop
        autoplay={{ delay: 5000 }}
        pagination={{
          clickable: true,
          el: ".container-news .swiper-pagination",
        }}
        navigation={{
          prevEl: ".container-news .swiper-prev",
          nextEl: ".container-news .swiper-next",
        }}
      >
        {newslist.map((news) => (
          <SwiperSlide>
            <NewsItem key={news._id} news={news} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="swiper-prev">
        <div className="material-icons">arrow_back</div>
      </div>
      <div className="swiper-next">
        <div className="material-icons">arrow_forward</div>
      </div>
      <div className="under-news">
        {newslist[0].media && (
          <div className="thumnail">
            <a
              href={newslist[0].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={newslist[0].media} alt="thumnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a
              href={newslist[0].link}
              target="_blank"
              rel="noopener noreferrer"
            >
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
