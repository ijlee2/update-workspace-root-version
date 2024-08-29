import { assert, test } from '@codemod-utils/tests';

import { compare } from '../../../../src/utils/version/index.js';

test('utils | versions > compare (base case)', function () {
  assert.strictEqual(compare('0.0.0', '0.0.0'), 0);
  assert.strictEqual(compare('0.3.0', '0.3.0'), 0);
  assert.strictEqual(compare('3.0.0', '3.0.0'), 0);

  assert.strictEqual(compare('0.0.1', '0.0.0'), -1);
  assert.strictEqual(compare('0.0.10', '0.0.5'), -1);
  assert.strictEqual(compare('0.3.0', '0.0.5'), -1);
  assert.strictEqual(compare('3.10.0', '3.5.5'), -1);
  assert.strictEqual(compare('3.0.0', '0.0.5'), -1);
  assert.strictEqual(compare('10.0.0', '5.5.5'), -1);

  assert.strictEqual(compare('0.0.0', '0.0.1'), 1);
  assert.strictEqual(compare('0.0.5', '0.0.10'), 1);
  assert.strictEqual(compare('0.0.5', '0.3.0'), 1);
  assert.strictEqual(compare('3.5.5', '3.10.0'), 1);
  assert.strictEqual(compare('0.0.5', '3.0.0'), 1);
  assert.strictEqual(compare('5.5.5', '10.0.0'), 1);
});
