import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runCodemod } from '../../src/index.js';
import { inputProject, outputProject } from '../fixtures/project-5/index.js';
import { codemodOptions } from '../helpers/shared-test-setups/project-5.js';

test('index > project-5', function () {
  loadFixture(inputProject, codemodOptions);

  runCodemod(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
