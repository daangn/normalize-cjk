import { test } from 'node:test';
import * as assert from 'node:assert/strict';

import { normalize } from '../src/index.ts';

test('normalize chinese string', () => {
  assert.strictEqual(
    normalize('⾣〸ム㦳䎛内呑尙岀敻爲耈蔿説飮'),
    '酉十厶㘽㖈內吞尚出夐為耇蒍說飲',
  );
});

test('normalize japanese string', () => {
  assert.strictEqual(normalize('ﾆｯﾎﾟﾝ'), 'ニッポン');
});

test('normalize korean string', () => {
  assert.strictEqual(normalize('㈜당근마켓'), '(주)당근마켓');
});
