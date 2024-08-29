import { assert, test } from '@codemod-utils/tests';

import { allow } from '../../../../src/utils/version/index.js';

test('utils | version > allow (allowed)', function () {
  assert.strictEqual(allow('0.0.0'), true);
  assert.strictEqual(allow('0.0.9'), true);
  assert.strictEqual(allow('0.0.99'), true);
  assert.strictEqual(allow('0.3.0'), true);
  assert.strictEqual(allow('3.0.0'), true);
});
