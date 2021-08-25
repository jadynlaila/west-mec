import React, { useState, useEffect } from "react";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="question">
      <header className="title">
        <h4>{title}</h4>
        <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
      </header>
      <p>{show && info}</p>
    </div>
  );
};

export default Question;
