import "./App.css";
import NewsApi from "./components/NewsApiComponent";
import React from "react";

function App() {
  return (
    <div className="App" style={{ width: "70%", height: "400px" }}>
      <NewsApi />
    </div>
  );
}

export default App;
