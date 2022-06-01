import React, { useEffect, useState } from "react";
import EV from "./Ev.json";

const { kakao } = window;
let markers = new Array();
let infoWindows = new Array();
const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.567167, 127.190292),
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
      tel: EV[i].MANAGE_ENTRPS_TELNO,
    });
  }
  console.log(markerdata);

  markerdata.forEach((e) => {
    let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(e.lat, e.lng),
      title: e.name,
      clickable: true,
    });

    let infoWindow = new kakao.maps.InfoWindow({
      map: map,
      content: `<div style="padding: 5px; height: 200px';">${e.name} <br> ${e.addr} <br> ${e.tel}</div>`,
      position: new kakao.maps.LatLng(e.lat, e.lng),
      removable: true,
    });

    markers.push(marker);
    infoWindows.push(infoWindow);
  });

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
    </div>
  );
};

export default Map;
