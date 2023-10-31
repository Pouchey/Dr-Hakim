import { EmbedBuilder } from 'discord.js';
import { TExemple } from '../types';

export const createEmbedExemple = (exemple: TExemple) => {
  const embed = new EmbedBuilder().setTitle(exemple.title);

  return embed;
};
