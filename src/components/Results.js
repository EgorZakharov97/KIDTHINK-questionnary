import React from 'react';
import Section from './Section';

export default function Results({ scores, quiz }) {
    
    const getResultForTopic = (i) => {
        console.log(quiz)
        const id = scores[i].id;
        const result = quiz[i].boundaries[id].resultText;
        return result;
    }

    return(
        <Section>
            <h2>Results</h2>
            {
                quiz.map((t, i) => {
                    return(
                        <Result
                            key={i}
                            topic={t.topic}
                            answer={getResultForTopic(i)}
                        />
                    )
                })
            }
        </Section>
    )
}

function Result({ topic, answer }) {
    return(
        <div>
            <h3>{topic}</h3>
            <p>{answer}</p>
        </div>
    )
}