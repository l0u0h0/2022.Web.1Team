import React from "react";

export default function History(date) {
  const month = date.date + 1;
  return (
    <div>
      <p>{month}월 충전 내역</p>
    </div>
  );
}
