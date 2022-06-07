import React, { useEffect, useState } from "react";

export default function ChargeHistory(props) {
  const month = props.date + 1;
  const [list, setList] = useState({ list: [0, 0, 0] });
  useEffect(() => {
    setList({ list: [month - 2, month - 1, month] });
  }, [month]);
  return (
    <div className="container-history">
      {list.list.map((month) => (
        <History month={month} />
      ))}
    </div>
  );
}

function History(props) {
  const month = props.month;
  if (month === 4) {
    return (
      <div className="history">
        <h1>{month}월 충전 내역</h1>
        <hr />
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 경기도청
          </p>
          <p>
            <b>충전량:</b> 24 kWh
          </p>
          <p>
            <b>충전 비용:</b> 8000원
          </p>
        </div>
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 태장동 주민센터
          </p>
          <p>
            <b>충전량:</b> 100 kWh
          </p>
          <p>
            <b>충전 비용:</b> 20000원
          </p>
        </div>
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 경기도 체육회관
          </p>
          <p>
            <b>충전량:</b> 32 kWh
          </p>
          <p>
            <b>충전 비용:</b> 8900원
          </p>
        </div>
      </div>
    );
  } else if (month === 5) {
    return (
      <div className="history">
        <h1>{month}월 충전 내역</h1>
        <hr />
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 수원화성박물관
          </p>
          <p>
            <b>충전량:</b> 50 kWh
          </p>
          <p>
            <b>충전 비용:</b> 10000원
          </p>
        </div>
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 행궁동 생태공원
          </p>
          <p>
            <b>충전량:</b> 70 kWh
          </p>
          <p>
            <b>충전 비용:</b> 13000원
          </p>
        </div>
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 수원서부경찰서
          </p>
          <p>
            <b>충전량:</b> 90 kWh
          </p>
          <p>
            <b>충전 비용:</b> 18000원
          </p>
        </div>
      </div>
    );
  } else if (month === 6) {
    return (
      <div className="history">
        <h1>{month}월 충전 내역</h1>
        <hr />
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 롯데마트 광교점
          </p>
          <p>
            <b>충전량:</b> 40 kWh
          </p>
          <p>
            <b>충전 비용:</b> 12000원
          </p>
        </div>
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 성균관대학교
          </p>
          <p>
            <b>충전량:</b> 66 kWh
          </p>
          <p>
            <b>충전 비용:</b> 12500원
          </p>
        </div>
        <div className="history-box">
          <p>
            <b>충전소 명칭:</b> 비봉영업소
          </p>
          <p>
            <b>충전량:</b> 77 kWh
          </p>
          <p>
            <b>충전 비용:</b> 13800원
          </p>
        </div>
      </div>
    );
  }
}
