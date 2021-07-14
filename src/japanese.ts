/**
 * Normalize Katakana characters
 * 
 * Replace all half-width kana with full-width form
 */
export const normalizeKatakana = (input: string): string => {
  return input
    .replace(
      /[\uff60-\uff9f]+/g,
      substr => substr.normalize('NFKC'),
    );
};

/**
 * Normalize Japanese characters (Katakana)
 *
 * Hiragana doesn't seem to need normalization. But it can be added eventually.
 *
 * Credits to [Yusuke Nemoto](https://github.com/kaakaa)
 * @See https://twitter.com/kaakaa_hoe_prog/status/1415149003293954060
 */
export const normalizeJapanese = normalizeKatakana;
