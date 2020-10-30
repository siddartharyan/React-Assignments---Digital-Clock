import React, { Component, useEffect, useRef, useState } from "react";
import "../styles/App.css";
const App = () => {
  let d = new Date().toLocaleTimeString();
  let [ctime, setTime] = useState(d);
  let id = useRef(null);
  useEffect(() => {
    id.current = setInterval(() => {
      let n = new Date().toLocaleTimeString();
      setTime(n);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div className="Clock">
      <h3 id="time">{ctime}</h3>
    </div>
  );
};
export default App;
