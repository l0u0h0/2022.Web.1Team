import "./css/App.css";
import "./css/News.css";
import "./css/Map.css";
import NewsApi from "./components/NewsApiComponent";
import Map from "./components/MapComponent";
import React from "react";
import $ from "jquery";
import logo from "./images/logo.png";

class App extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      var $tablink = $("#nav li > a").click(function () {
        var idx = $tablink.index(this);
        $("#nav li > a").removeClass("on");
        $("#nav li > a").eq(idx).addClass("on");
        $("#section > div").removeClass("on");
        $("#section > div").eq(idx).addClass("on");
      });
    });
  }
  render() {
    return (
      <div>
        <body>
          <header id="header">
            <div className="logo">
              <a href="javascript:void(0)">
                <img src={logo} alt="logo " />
              </a>
            </div>
          </header>
          <nav id="nav">
            <ul>
              <li>
                <a href="javascript:void(0)" className="on">
                  전기차 충전소 위치
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">충전 내역</a>
              </li>
              <li>
                <a href="javascript:void(0)">전기차 이슈</a>
              </li>
            </ul>
          </nav>

          <section id="section">
            <div class="on">
              <Map />
            </div>
            <div>충전내역</div>
            <div>
              <NewsApi />
            </div>
          </section>

          <footer id="footer">
            <div class="container">
              <address>
                Copyright ©
                <a href="javascript:void(0)">
                  <strong>Web team</strong>
                </a>
                All Rights Reserved.
              </address>
            </div>
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
