import { Events, Message } from 'discord.js';
import { getRandomReactionArray } from '../modules/quoi/utils';

export default {
  name: Events.MessageCreate,
  execute: async (message: Message) => {
    if (message.content.toLowerCase().includes('quoi')) {
      const reactionArray = getRandomReactionArray();

      for (const reaction of reactionArray) {
        await message.react(reaction);
      }
    }
  }
};
