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
        <History key={`month_${month}`} month={month} />
      ))}
    </div>
  );
}

function History(props) {
  const month = props.month;
  return (
    <div className="history">
      <h1>{month}월 충전 내역</h1>
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
  );
}
