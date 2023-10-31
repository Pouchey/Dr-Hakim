import { random } from '../../utils/random';

export const getRandomReactionArray = () => {
  const rand = random(0, 3);

  if (rand > 2) return ['🇨', '🇴', '🇺', '🇧', '🇪', '🇭'];

  return ['🇫', '🇪', '🇺', '🇷'];
};
