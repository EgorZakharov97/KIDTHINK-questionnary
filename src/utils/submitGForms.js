import { BASE_URL, G_FORM_API_KEY, QUESTIONS_FORM_ID, CONTACT_FORM_ID } from '../config';
import { getSlug } from './lib';

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
        text += `\n\n${topic.name}: score - ${topic.score} out of ${topic.answers.length * 4}\n\n`
        quiz[i].questions.map((q, m) => {
            text += q.title + ':\t' + getBoundary(topic.answers[m]) + "\n";
        })
    });
    return text
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
function formatDate(date) {
    return [
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
    ].join('/');
}

const submitForm = async (form_id, body) => {
    const URL = BASE_URL + '/wp-json/gf/v2/entries';
    const result = await fetch(URL, {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Basic ${G_FORM_API_KEY}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            "form_id": form_id,
            ...body
        })
    })
    const data = await result.json();
    return await data;
}

export async function submitAnonimous(quiz, scores) {
    const body = getTextSummary(quiz, scores);
    return submitForm(QUESTIONS_FORM_ID, {"1": body, "4": getSlug(), "6": formatDate(new Date())});
}

export function submitUserData(name, email, phone, message, quiz, scores) {
    const answers = getTextSummary(quiz, scores);
    const body = {
        "1": name,
        "3": email,
        "4": phone,
        "5": message,
        "6": answers
    }
    return submitForm(CONTACT_FORM_ID, body);
}