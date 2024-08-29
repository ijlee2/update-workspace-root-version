import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/monorepo-increment-by-one-edge-case.js';

test('steps | create-options > monorepo (increment-by-one, edge case)', function () {
  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
