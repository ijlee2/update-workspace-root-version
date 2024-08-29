import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/monorepo-highest-version-1.js';

test('steps | create-options > monorepo (highest-version, 1)', function () {
  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
