import { assert, test } from '@codemod-utils/tests';

import { allow } from '../../../../src/utils/version/index.js';

test('utils | version > allow (not allowed)', function () {
  assert.strictEqual(allow(undefined), false);
  assert.strictEqual(allow(''), false);
  assert.strictEqual(allow('v0.3.0'), false);
  assert.strictEqual(allow('0.3.0-beta'), false);
  assert.strictEqual(allow('0.3.0-beta.1'), false);
  assert.strictEqual(allow('0.3.0-unstable'), false);
  assert.strictEqual(allow('0.3.0-unstable.f39a1e8'), false);
});
