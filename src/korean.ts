/**
 * Normalize Hangul (Hangeul, Korean alphabet) characters to NFKC(Normalization Form Compatibility Composition)
 */
export const normalizeHangul = (input: string): string => {
  // Credits to [@Pusnow](https://github.com/Pusnow)
  // for providing an useful [explanation](https://gist.github.com/Pusnow/aa865fa21f9557fa58d691a8b79f8a6d)
  return input.replace(
    // Range to normalize
    // - Hangul Jamo: 1100 ~ 11FF
    // - Hangul Compatibility Jamo: 3130 ~ 318F
    // - Enclosed CJK Letters and Months - Hangul: 3200 ~ 321E, 3260 ~ 327F
    // - Halfwidth and Fullwidth Forms - Halfwidth Hangul variants: FFA0 ~ FFDC
    // - Halfwidth and Fullwidth Forms - FULLWIDTH WON SIGN: FFE6
    /[\u1100-\u11ff\u3130-\u318f\u3200-\u321e\u3260-\u327f\uffa0-\uffdc\uffe6]+/g,
    substr => substr.normalize('NFKC'),
  );
};

export const normalizeKorean = normalizeHangul;
