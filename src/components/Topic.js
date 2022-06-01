import { useState, useEffect } from 'react';
import Section from './Section';
import Question from './Question';
import TextSlider from './TextSlider';

export default function Topic(props){
    const [answers, setAnswers] = useState(Array(props.questions.length).fill(0));

    useEffect(() => {
        const score = answers.reduce((acc, v) => (Boolean(v) ? acc+v : acc), 0);
        const [boundary, id] = calculateBoundaty(score);
        props.setScore({
            name: props.topic,
            score,
            boundary,
            id,
            answers
        })
    }, [answers]);

    const calculateBoundaty = (score) => {
        let indexes = [];
        const topic = props.boundaries.filter((b, i) => {
            if (b.maxValue >= score) { indexes.push(i); return true }
            else return false;
        })[0];
        const boundary = topic ? topic.name : props.boundaries[props.boundaries.length-1].name;
        let index = indexes.length ? indexes[0] : props.boundaries.length-1;
        return [boundary, index];
    }

    return(
        <Section>
            <h2>{props.topic}</h2>
            {
                props.questions.map((question, i) => {
                    return (
                        <Question
                            key={i}
                            question={question}
                        >
                            <TextSlider
                                key={i}
                                title={question.title}
                                setScore={(value) => {
                                    const newAnswer = [...answers];
                                    newAnswer[i] = value;
                                    setAnswers(newAnswer);
                                }}
                            />
                        </Question>
                    )
                })
            }
        </Section>
    )
}