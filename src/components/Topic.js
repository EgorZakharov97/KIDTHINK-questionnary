import { useState, useEffect } from 'react';
import Section from './Section';
import Question from './Question';
import TextSlider from './TextSlider';

export default function Topic(props){
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const score = answers.reduce((acc, v) => (Boolean(v) ? acc+v : acc), 0);
        const boundary = calculateBoundaty(score);
        props.setScore({
            name: props.name,
            score,
            boundary,
        })
    }, [answers]);

    const calculateBoundaty = (score) => {
        return props.boundaries.filter((b) => {
            if (b.minValue === undefined && score === 0) return true; // Not Present
            if (b.minValue !== undefined && b.maxValue !== undefined && score >= b.minValue && score <= b.maxValue) return true; // Something in between
            if (b.maxValue === undefined && score >= b.minValue) return true // Severe
            else return false;
        })[0].name;
    }

    return(
        <Section>
            <h2>{props.name}</h2>
            {
                props.questions.map((question, i) => {
                    return (
                        <Question
                            key={i}
                            question={question}
                        >
                            <TextSlider
                                key={i}
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