import './App.css';
import React, { useState } from 'react';
import Topic from './components/Topic';
import questions from './Questions';

function App() {
  const [scores, setScores] = useState(questions.topics.map((q) => ({
    name: q.name,
    score: 0,
    boundary: "Not Present",
  })))

  const submit = () => {
    console.log(scores)
  }

  return (
    <div>
      {
        questions.topics.map((topic, i) => {
          return <Topic 
            key={i} 
            {...topic}
            setScore={(score) => {
              const newScore = [...scores];
              newScore[i] = score;
              setScores(newScore);
            }}
          />
        })
      }
      <button onClick={submit}>Submit</button>
    </div>
  )  
}

export default App;
