import { assert, test } from '@codemod-utils/tests';

import { increment } from '../../../../src/utils/versions/index.js';

test('utils | versions > increment (base case)', function () {
  assert.strictEqual(increment('0.0.0'), '0.0.1');
  assert.strictEqual(increment('0.0.9'), '0.0.10');
  assert.strictEqual(increment('0.0.99'), '0.0.100');
  assert.strictEqual(increment('0.3.0'), '0.3.1');
  assert.strictEqual(increment('3.0.0'), '3.0.1');
});
