import React, { useEffect, useState } from 'react';
import Section from './Section';
import { SUBMIT_ANONIMOUS } from '../config';
import { submitAnonimous } from '../utils/submitGForms';
import useLocalStorage from '../hooks/useLocalStorage';
import { getSlug } from '../utils/lib';
import EventEmitter from '../utils/EventEmitter';

export default function Results({ quiz, scores }) {
    const calculateResourcse = () => {
        const ids = scores.map((score) => (score.id));
        const arrayOfResourcesByCategory = ids.map((id, i) => (quiz[i].boundaries[id].resources));
        let usedResources = [];
        const resourcesByCategoryToDisplay = [];
        arrayOfResourcesByCategory.map((resourceArray, i) => {
            if (!resourceArray) {
                resourcesByCategoryToDisplay.push([]);
                return;
            }
            const unusedResourcesOfCategory = resourceArray.filter((res) => (!Boolean(usedResources.filter(ea => (ea.title == res.title)).length)));
            resourcesByCategoryToDisplay.push(unusedResourcesOfCategory);
            usedResources = [...usedResources, ...unusedResourcesOfCategory];
        });
        return resourcesByCategoryToDisplay;
    }

    const [resources, setResources] = useState(calculateResourcse);

    const getResultForTopic = (i) => {
        const id = scores[i].id;
        const result = quiz[i].boundaries[id].resultText;
        return result;
    }

    useEffect(() => {
        const submit = () => {
            console.log('here')
            setResources(calculateResourcse());
            if (!SUBMIT_ANONIMOUS) return;
            submitAnonimous(quiz, scores).then(console.log);
        }
        const listener = EventEmitter.addListener('submit', submit);
        return () => { listener.remove() }
    }, [])

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
                            resources={resources[i]}
                        />
                    )
                })
            }
        </Section>
    )
}

function Result({ topic, answer, resources }) {
    return(
        <div>
            <h3>{topic}</h3>
            <p>{answer}</p>
            {
                Boolean(resources && resources.length) && 
                <div>
                    <p>Please, consider these resources</p>
                    <ul>
                        {
                            resources.map((res, i) => (
                                <li key={i}><a target="_blank" rel="noopener noreferrer nofollow" href={res.url}>{res.title}</a></li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}