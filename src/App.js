import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Title from "./Components/title";
import Explanation from "./Components/explanation";
import Copyright from "./Components/copyright";
import Date from "./Components/date";

function App() {
  const [nasaData, setNasaData] = useState({}); //slice of data

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`) //network request
      .then((res) => {
        console.log(res);
        setNasaData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const img = document.createElement("img");
  img.src = nasaData.url;
  return (
    <div className="App">
      <div>
        <Title title={nasaData.title} />
      </div>
      <div>
        <Date date={nasaData.date} />
      </div>
      <div>
        <img src={nasaData.url} />
      </div>
      <div>
        <Copyright copyright={nasaData.copyright} />
      </div>
      <div>
        <Explanation explanation={nasaData.explanation} />
      </div>
    </div>
  );
}

export default App;
