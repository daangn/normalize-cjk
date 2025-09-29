import { normalizeChinese } from './chinese.ts';
import { normalizeJapanese } from './japanese.ts';
import { normalizeKorean } from './korean.ts';

export const normalize = (input: string): string => {
  return normalizeChinese(normalizeJapanese(normalizeKorean(input)));
};
