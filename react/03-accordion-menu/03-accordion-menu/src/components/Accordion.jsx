import React, { useState, useEffect } from "react";
import Question from "./Question";

const Accordion = ({questions}) => {
    console.log(questions);
  return (
    <div className="container">
      <h3>Questions and Answers About Login</h3>
      <section className="info">
        <article> 
            {questions.map((question) => {
                const {id, title, info} = question
                return(
                    <Question className='question' key={id} title={title} info={info}/>
                )
            })}
        </article>
      </section>
    </div>
  );
};

export default Accordion;
