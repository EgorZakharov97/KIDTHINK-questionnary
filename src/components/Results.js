import React, { useState, useEffect } from 'react';
import Section from './Section';
import { SUBMIT_ANONIMOUS } from '../config';
import { submitAnonimous } from '../utils/submitGForms';
import useLocalStorage from '../hooks/useLocalStorage';
import { getSlug } from '../utils/lib';
import EventEmitter from '../utils/EventEmitter';

export default function Results({ quiz, scores }) {
    const [wasUploaded, setUploaded] = useLocalStorage((getSlug() + '/wasUploaded'), false);
    
    const getResultForTopic = (i) => {
        const id = scores[i].id;
        const result = quiz[i].boundaries[id].resultText;
        return result;
    }

    useEffect(() => {
        const flush = () => { setUploaded(false) }
        const listener = EventEmitter.addListener('flush', flush);
        return () => { listener.remove() }
    }, [])

    useEffect(() => {
        if (!SUBMIT_ANONIMOUS || wasUploaded) return;
        submitAnonimous(quiz, scores);
        setUploaded(true);
    })

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