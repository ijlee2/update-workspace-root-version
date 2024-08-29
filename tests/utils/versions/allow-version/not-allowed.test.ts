import { assert, test } from '@codemod-utils/tests';

import { allowVersion } from '../../../../src/utils/versions/index.js';

test('utils | versions > allow-version (not allowed)', function () {
  assert.strictEqual(allowVersion(undefined), false);
  assert.strictEqual(allowVersion(''), false);
  assert.strictEqual(allowVersion('v0.3.0'), false);
  assert.strictEqual(allowVersion('0.3.0-beta'), false);
  assert.strictEqual(allowVersion('0.3.0-beta.1'), false);
  assert.strictEqual(allowVersion('0.3.0-unstable'), false);
  assert.strictEqual(allowVersion('0.3.0-unstable.f39a1e8'), false);
});
