import { Events, Message } from 'discord.js';
import { getRandomReactionArray, getRandomMessage } from '../modules/quoi/utils';

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
        message.react(reaction);
      }
    }

    // if maxou speak
    if (message.author.id === '282088648436875264') message.reply('Maxou, tu es le meilleur !');

    // if val speak
    if (message.author.id === '474170343398047754') message.react('🥚');

    const randomMessage = getRandomMessage();
    if (randomMessage) message.reply(randomMessage);
  }
};
