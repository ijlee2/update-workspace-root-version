import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runCodemod } from '../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../fixtures/monorepo-increment-by-one-1/index.js';
import { codemodOptions } from '../helpers/shared-test-setups/monorepo-increment-by-one-1.js';

test('index > monorepo (increment-by-one, 1)', function () {
  loadFixture(inputProject, codemodOptions);

  runCodemod(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
