import { BASE_URL, G_CONSUMER_KEY, G_CONSUMER_SECRET } from '../config';
import { getSlug } from './lib';

export async function submitAnonimous(quiz, score) {
    const URL = BASE_URL + getSlug();
    
    for(let i=0; i< quiz.length; i++){
        const topic = quiz[i];
        const title = topic.topic;
        const boundary
    }
}