import { normalizeChinese } from './chinese';
import { normalizeJapanese } from './japanese';
import { normalizeKorean } from './korean';

export const normalize = (input: string): string => {
  return normalizeChinese(normalizeJapanese(normalizeKorean(input)));
};
