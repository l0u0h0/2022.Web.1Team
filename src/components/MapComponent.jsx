import React, { useEffect, useState } from "react";
import EV from "../json/Ev.json";
import "../css/App.css";

const { kakao } = window;

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.2634355, 127.02863),
      level: 8,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  const markerdata = [];

  for (var i = 0; i < EV.length; i++) {
    markerdata.push({
      name: EV[i].TEMP_CONT01,
      lat: EV[i].REFINE_WGS84_LAT,
      lng: EV[i].REFINE_WGS84_LOGT,
      addr: EV[i].REFINE_ROADNM_ADDR,
    });
  }
  for (var j = 0; j < markerdata.length; j++) {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(markerdata[j].lat, markerdata[j].lng),
      title: markerdata[j].name,
    });

    const ex = marker.Gb;

    function findmark(markerdata) {
      return markerdata.name === ex;
    }

    kakao.maps.event.addListener(marker, "click", function () {
      var ex1 = markerdata.find(findmark);

      var ran = Math.ceil(Math.random() * 3);
      var ex2 = { state: ran };
      var ex3 = Object.assign({}, ex1, ex2);
      console.log(ex3);

      let resultHTML = "";

      if (ex3.state === 1) {
        resultHTML = ` 
        <ul>
        <li>
          <h2>${ex3.name}</h2>
          <p>주소: ${ex3.addr}</p>
          <p><a class="red">●</a> <a class="red_text">혼잡</a></p>
      </li>
      </ul>`;
      }
      if (ex3.state === 2) {
        resultHTML = ` 
        <ul>
        <li>
          <h2>${ex3.name}</h2>
          <p>주소: ${ex3.addr}</p>
          <p><a class="yellow">●</a> <a class="yellow_text">보통</a></p>
      </li>
      </ul>`;
      }
      if (ex3.state === 3) {
        resultHTML = ` 
        <ul>
        <li>
          <h2>${ex3.name}</h2>
          <p>주소: ${ex3.addr}</p>
          <p><a class="blue">●</a>  <a class="blue_text">원할</a></p>
      </li>
      </ul>`;
      }

      document.getElementById("marker_info").innerHTML = resultHTML;
    });
  }

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <div id="map" style={{ width: "99%", height: "500px" }}></div>
      <div id="marker_info"></div>
    </div>
  );
};

export default Map;
