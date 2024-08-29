import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runCodemod } from '../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../fixtures/monorepo-highest-version-edge-case/index.js';
import { codemodOptions } from '../helpers/shared-test-setups/monorepo-highest-version-edge-case.js';

test('index > monorepo (highest-version, edge case)', function () {
  loadFixture(inputProject, codemodOptions);

  runCodemod(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
