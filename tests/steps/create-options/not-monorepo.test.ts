import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/not-monorepo.js';

test('steps | create-options > not monorepo', function () {
  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
