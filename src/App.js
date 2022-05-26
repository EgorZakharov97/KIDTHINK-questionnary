import './App.css';
import React, { useEffect, useState } from 'react';
import Topic from './components/Topic';
import Section from './components/Section';
import PersonalInformation from './components/PersonalInformation';
import useLocalStorage from './hooks/useLocalStorage';
import EventEmitter from './utils/EventEmitter';
import Results from './components/Results';
import { getSlug } from './utils/lib';
import { BASE_URL } from './config';

function App() {
  const [answered, setAnswered] = useLocalStorage("answered", false);
  const [confirm, setConfirm] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [questions, setQuestions] = useLocalStorage("questions", []);
  const [scores, setScores] = useLocalStorage("scores", null);

  const fetchQuestions = async () => {
    setFetching(true);
    const slug = getSlug;
    const res = await fetch(BASE_URL + slug);
    const data = await res.json();
    setFetching(false);
    return data[0].acf.questionnaire;
  }

  const setInitialScores = (questions) => {
    setScores(questions.map((q) => ({
      name: q.topic,
      score: 0,
      boundary: "Not Present",
      id: 0,
    })))
  }

  const flush = () => {
    EventEmitter.emit('flush');
    setAnswered(false);
  }

  const areSame = (obj1, obj2) => {
    return (JSON.stringify(obj1) === JSON.stringify(obj2))
  }

  useEffect(() => {
    if (fetching) return;
    fetchQuestions()
      .then((q) => {
        console.log(q)
        if (!areSame(questions, q)) {
          console.log("Flush");
          setQuestions(q);
          setInitialScores(q);
          flush();
        } else {
          console.log("Nothing to update")
        }
      })
  }, [])


  const submit = () => {
    // TODO: Send results to form here
    console.log(scores);
    setAnswered(true);
  }

  if(fetching && !questions.length) return (
    <div>
      Loading...
    </div>
  )

  return (
    <div>
      <Section>
        <h2>Okay you have to confirm</h2>
        <div>
          <p>Disclaimer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta nibh vel posuere imperdiet. Phasellus ut aliquam velit. Suspendisse volutpat lacus tortor, ultricies commodo dui varius eget. Morbi dictum iaculis sapien id malesuada. Curabitur eget convallis ante. Sed ac libero id nisl suscipit ullamcorper. Ut ut elementum nibh. Nulla facilisi. Aliquam faucibus malesuada ipsum ut volutpat.</p>
          <h3>I confirm that everything is okay and I will not complain</h3>
          <input type="checkbox" name="confirmation" id="confirm" value={confirm} onChange={() => {setConfirm(!confirm)}} />
          <label htmlFor="confirm">Confirm</label>
        </div>
      </Section>
      <div>
      { Boolean(scores) &&
        questions.map((topic, i) => {
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
      <button disabled={!confirm} onClick={submit}>Submit</button>
      { !confirm && <p>Please confirm that you are agree</p>}
    </div>
    { answered && <Results quiz={questions} scores={scores}/> }
    { answered && <PersonalInformation/> }
    </div>
  )  
}

export default App;
