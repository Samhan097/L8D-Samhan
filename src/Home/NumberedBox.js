import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NumberedBox() {
  const sharedStyle = {
    border: "1px solid #DEDEDE4D",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    marginTop: 200,
    marginBottom:200,
    fontSize: 44,
  };

  return (
    <div style={sharedStyle}>
      <div
        style={{
          border: "1px solid #D9D9D9",
          width: 188,
          margin: 0,
          paddingTop:20,
          color: "#3333331A",
        }}
      >
        <h2>01</h2>
      </div>
      <div
        style={{
          border: "1px solid #D9D9D9",
          width: 188,
          margin: 0,
          paddingTop:20,
          color: "#3333331A",
        }}
      >
        <h2>02</h2>
      </div>
      <div
        style={{
          border: "1px solid #D9D9D9",
          width: 188,
          paddingTop:20,
          margin: 0,
          color: "#3333331A",
        }}
      >
        <h2>03</h2>
      </div>
      <div
        style={{
          border: "1px solid #D9D9D9",
          width: 188,
          paddingTop:20,
          margin: 0,
          color: "#3333331A",
        }}
      >
        <h2>04</h2>
      </div>
      <div
        style={{
          border: "1px solid #D9D9D9",
          paddingTop:20,
          width: 188,
          margin: 0,
          color: "#3333331A",
        }}
      >
        <h2>05</h2>
      </div>
      <div
        style={{
          border: "1px solid #D9D9D9",
          paddingTop:20,
          width: 188,
          margin: 0,
          color: "#3333331A",
        }}
      >
        <h2>06</h2>
      </div>
      <div
        style={{
          border: "1px solid #D9D9D9",
          paddingTop:20,
          width: 188,
          margin: 0,
          color: "#3333331A",
        }}
      >
        <h2
          
        >
          07
        </h2>
      </div>
      <div
        style={{
          border: "1px solid #D9D9D9",
          paddingTop:20,
          width: 188,
          margin: 0,
          background: "#333333",
          color: "white",
        }}
      >
        <h2>Level8Digital</h2>
      </div>
    </div>
  );
}
