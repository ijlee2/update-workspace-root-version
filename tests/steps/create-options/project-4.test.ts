import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/project-4.js';

test('steps | create-options > project-4', function () {
  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
