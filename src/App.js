import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://kimmie.io/" target="_blank" rel="noreferrer">
            Kim Nguyen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kimnguyen10/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
