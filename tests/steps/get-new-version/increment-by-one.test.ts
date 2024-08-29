import { assert, test } from '@codemod-utils/tests';

import { getNewVersion } from '../../../src/steps/index.js';
import { options } from '../../helpers/shared-test-setups/monorepo-increment-by-one-1.js';

test('steps | get-new-version > increment-by-one', function () {
  assert.strictEqual(
    getNewVersion(
      ['0.3.1', '0.4.0', '0.2.5', '0.3.4', '0.2.0'],
      '0.4.0',
      options,
    ),
    '0.4.1',
  );

  assert.strictEqual(
    getNewVersion(
      ['0.3.1', '0.5.0', '0.2.5', '0.3.3', '0.1.8'],
      '0.4.0',
      options,
    ),
    '0.4.1',
  );

  assert.strictEqual(
    getNewVersion(
      ['1.8.13', '2.5.0', '2.4.1', '3.0.0', '0.9.3'],
      '2.4.1',
      options,
    ),
    '2.4.2',
  );
});
