import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runCodemod } from '../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../fixtures/monorepo-highest-version-1/index.js';
import { codemodOptions } from '../helpers/shared-test-setups/monorepo-highest-version-1.js';

test('index > monorepo (highest-version, 1)', function () {
  loadFixture(inputProject, codemodOptions);

  runCodemod(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
