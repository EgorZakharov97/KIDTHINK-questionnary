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
          <Section>
            <h2>Before you Submit</h2>
            <div className="disclaimer">
              <p>Disclaimer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta nibh vel posuere imperdiet. Phasellus ut aliquam velit. Suspendisse volutpat lacus tortor, ultricies commodo dui varius eget. Morbi dictum iaculis sapien id malesuada. Curabitur eget convallis ante. Sed ac libero id nisl suscipit ullamcorper. Ut ut elementum nibh. Nulla facilisi. Aliquam faucibus malesuada ipsum ut volutpat.</p>
              <input type="checkbox" name="confirmation" id="confirm" value={confirm} onChange={() => {setConfirm(!confirm)}} />
              <label htmlFor="confirm">I confirm that KIDTHINK can collect and store answers to this quiz anonimously</label>
            </div>
            <button className="submit" disabled={!confirm} onClick={submit}>Submit</button>
          </Section>
        }
        </div>
        { answered && <Results submitted={answered} quiz={questions} scores={scores}/> }
      </div>
        { answered && <PersonalInformation quiz={questions} scores={scores} /> }
    </div>
  )  
}

export default App;
