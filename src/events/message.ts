import {Events, Message} from 'discord.js';
import {getRandomReactionArray, getRandomMessage} from '../modules/quoi/utils';

export default {
    name: Events.MessageCreate,
    execute: async (message: Message) => {

        // on vérifie que le message n'a pas été envoyé par le bot lui-même
        if (message.author.id === message.client.user?.id) {
            return;
        }

        if (message.content.toLowerCase().includes('quoi')) {
            const reactionArray = getRandomReactionArray();

            for (const reaction of reactionArray) {
                await message.react(reaction);
            }
        } else {
            const randomMessage = getRandomMessage();

            if (randomMessage) {
                await message.reply(randomMessage);
            }
        }
    }
};

