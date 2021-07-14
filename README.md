# normalize-CJK

[![Package Version](https://img.shields.io/npm/v/normalize-cjk)](https://npm.im/normalize-cjk)
[![License](https://img.shields.io/npm/l/normalize-cjk)](#License)
[![NPM Bundle Size](https://img.shields.io/bundlephobia/minzip/normalize-cjk)](https://bundlephobia.com/package/normalize-cjk)

Normalize CJK characters in text

## Usage

```js
import {
  // Function to normalize CJK text in the given string
  normalize,

  // Function to normalize Chinese only
  normalizeChinese,

  // Function to normalize Half-width Kana only
  normalizeJapanese,
  normalizeKatakana,

  // Function to normalize Hangul only
  normalizeKorean,
  normalizeHangul,
} from 'normalize-cjk';
```

## Are you looking for normalizer for accents/diacritics?

Consider [normalize-diacritics](https://github.com/motss/normalize-diacritics) or [lodash.deburr](https://lodash.com/docs/#deburr)
