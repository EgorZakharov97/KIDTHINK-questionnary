import { BASE_URL, G_CONSUMER_KEY, G_CONSUMER_SECRET, QUESTIONS_FORM_ID } from '../config';

function getBoundary(id) {
    switch(id) {
        case 0:
            return "Not Present";
        case 1:
            return "Low";
        case 2:
            return "Mild";
        case 3:
            return "Moderate";
        case 4:
            return "Severe";
    }
}

const getTextSummary = (quiz, scores) => {
    let text = "";
    scores.map((topic, i) => {
        text += `${topic.name}: score - ${topic.score} out of ${topic.answers.length * 4}\n\n`
        quiz[i].questions.map((q, m) => {
            text += q.title + '\n\tAnswer: ' + getBoundary(topic.answers[m]) + "\n";
        })
    });
    return text
}

export async function submitAnonimous(quiz, scores) {
    const URL = BASE_URL + '/wp-json/gf/v2/entries';
    const body = getTextSummary(quiz, scores);
    const result = await fetch(URL, {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Basic ${G_CONSUMER_KEY}:${G_CONSUMER_SECRET}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            "form_id": QUESTIONS_FORM_ID,
            "1": body
        })
    })
    const data = await result.json();
    console.log(data);
}