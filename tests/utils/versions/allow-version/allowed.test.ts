import { assert, test } from '@codemod-utils/tests';

import { allowVersion } from '../../../../src/utils/versions/index.js';

test('utils | versions > allow-version (allowed)', function () {
  assert.strictEqual(allowVersion('0.0.0'), true);
  assert.strictEqual(allowVersion('0.0.9'), true);
  assert.strictEqual(allowVersion('0.0.99'), true);
  assert.strictEqual(allowVersion('0.3.0'), true);
  assert.strictEqual(allowVersion('3.0.0'), true);
});
