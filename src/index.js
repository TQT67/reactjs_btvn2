import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const mockData = [
  {
    name: "Tráng",
    age: 22,
  },
  {
    name: "Chi",
    age: 20,
  },
  {
    name: "Sáng",
    age: 24,
  },
  {
    name: "Huy",
    age: 21,
  },
];

root.render(
  <div>
    {mockData.map((person) => (
      <div key={person.id}>
        <h3>{person.name}</h3>
        <p>Age: {person.age}</p>
      </div>
    ))}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
