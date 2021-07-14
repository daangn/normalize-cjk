import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { normalize } from '../src';

test('normalize chinese string', () => {
  assert.is(
    normalize('⾣〸ム㦳䎛内呑尙岀敻爲耈蔿説飮'),
    '酉十厶㘽㖈內吞尚出夐為耇蒍說飲',
  );
});

test('normalize japanese string', () => {
  assert.is(normalize('ﾆｯﾎﾟﾝ'), 'ニッポン');
});

test('normalize korean string', () => {
  assert.is(normalize('㈜당근마켓'), '(주)당근마켓');
});

test.run();
