import React from "react";

export default function History(props) {
  const month = props.date + 1;
  return (
    <div className="container-history">
      <div className="history">
        <h1>{month - 2}월 충전 내역</h1>
        <hr />
        <div className="history-box">
          <p>충전소 명칭</p>
          <p>충전량</p>
          <p>충전 비용</p>
        </div>
        <div className="history-box">
          <p>충전소 명칭</p>
          <p>충전량</p>
          <p>충전 비용</p>
        </div>
        <div className="history-box">
          <p>충전소 명칭</p>
          <p>충전량</p>
          <p>충전 비용</p>
        </div>
      </div>
    </div>
  );
}
