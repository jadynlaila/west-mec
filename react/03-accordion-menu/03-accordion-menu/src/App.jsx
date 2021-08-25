import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import questions from './util/questionsFile';

function App() {
  console.log(questions);

  return (
    
    <Accordion questions={questions}/>
    
  );
}

export default App;
