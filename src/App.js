import './App.css';
import React, { useEffect, useState } from 'react';
import Topic from './components/Topic';
import div from './components/Section';
import PersonalInformation from './components/PersonalInformation';
import useLocalStorage from './hooks/useLocalStorage';
import EventEmitter from './utils/EventEmitter';
import Results from './components/Results';
import { getSlug } from './utils/lib';
import { BASE_URL } from './config';
import Loading from './components/Loading';

function App() {
  const [answered, setAnswered] = useLocalStorage((getSlug() + "/answered"), false);
  const [confirm, setConfirm] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [questions, setQuestions] = useLocalStorage((getSlug() + "/questions"), []);
  const [scores, setScores] = useLocalStorage((getSlug() + "/scores"), null);

  const fetchQuestions = async () => {
    setFetching(true);
    const res = await fetch(BASE_URL + '/wp-json/wp/v2/pages?slug=' + getSlug());
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
      answers: []
    })))
  }

  const flush = () => {
    EventEmitter.emit('flush');
    setAnswered(false);
  }
  window.flush = flush;

  const areSame = (obj1, obj2) => {
    return (JSON.stringify(obj1) === JSON.stringify(obj2))
  }

  useEffect(() => {
    if (fetching) return;
    fetchQuestions()
      .then((q) => {
        if (!areSame(questions, q)) {
          setQuestions(q);
          setInitialScores(q);
          flush();
        } else {

        }
      })
  }, []);

  const submit = () => {
    EventEmitter.emit('submit');
    setAnswered(true);
  }

  if(fetching && !questions.length) return (
    <div style={{margin: "0 auto"}}>
      <Loading/>
    </div>
  )

  return (
    <div>
      <div className='container'>
        <div>
        <div className="disclaimer">
          <h3>Disclaimer</h3>
          <p>Disclaimer: Kidthink Children’s Mental Health Centre Inc. and its sponsors, partners, and other associates disclaim any liability, loss, or risk incurred as a consequence, directly or indirectly, from the use and application of this questionnaire and the resulting resource recommendations.</p>
          <input type="checkbox" name="confirmation" id="confirm" checked={confirm} onChange={() => {setConfirm(!confirm)}} />
          <label htmlFor="confirm">I confirm that I have read, understood, and agreed with the above disclaimer.</label>
        </div>
        {/* { answered && <button onClick={flush}>Reset Questionnary?</button>} */}
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
        { !answered &&
          <div>
            <h3>Disclaimer</h3>
            <div className="disclaimer">
              <p>Disclaimer: Kidthink Children’s Mental Health Centre Inc. and its sponsors, partners, and other associates disclaim any liability, loss, or risk incurred as a consequence, directly or indirectly, from the use and application of this questionnaire and the resulting resource recommendations.</p>
              <input type="checkbox" name="confirmation" id="confirm" checked={confirm} onChange={() => {setConfirm(!confirm)}} />
              <label htmlFor="confirm">I confirm that I have read, understood, and agreed with the above disclaimer.</label>
            </div>
            <button className="submit" disabled={!confirm} onClick={submit}>Submit</button>
          </div>
        }
        </div>
        { answered && <Results submitted={answered} quiz={questions} scores={scores}/> }
      </div>
        { answered && <PersonalInformation quiz={questions} scores={scores} /> }
    </div>
  )  
}

export default App;
