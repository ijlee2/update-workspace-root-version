import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runCodemod } from '../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../fixtures/monorepo-increment-by-one-edge-case/index.js';
import { codemodOptions } from '../helpers/shared-test-setups/monorepo-increment-by-one-edge-case.js';

test('index > monorepo (increment-by-one, edge case)', function () {
  loadFixture(inputProject, codemodOptions);

  runCodemod(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
