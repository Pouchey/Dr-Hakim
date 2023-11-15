import {random} from '../../utils/random';
import * as fs from 'fs';

export const getRandomReactionArray = () => {
    const rand = random(0, 3);

    if (rand > 2) return ['🇨', '🇴', '🇺', '🇧', '🇪', '🇭'];

    return ['🇫', '🇪', '🇺', '🇷'];
};


export function getRandomMessage(): string | undefined {
    try {
        const data = JSON.parse(fs.readFileSync('src/utils/citations.json', 'utf-8'));
        const randomNum = Math.floor(Math.random() * 30) + 1;

        if (randomNum === 1) {
            const maxMessageNum = Object.keys(data).length;
            const randomMessageNum = Math.floor(Math.random() * maxMessageNum) + 1;

            return data[randomMessageNum.toString()];
        }
    } catch (error) {
        console.error('Erreur de lecture du fichier JSON :', error);
    }
    return undefined;
};