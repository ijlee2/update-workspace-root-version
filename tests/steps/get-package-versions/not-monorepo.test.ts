import { assert, loadFixture, test } from '@codemod-utils/tests';

import { getPackageVersions } from '../../../src/steps/index.js';
import { inputProject } from '../../fixtures/not-monorepo/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/not-monorepo.js';

test('steps | get-package-versions > not monorepo', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(getPackageVersions(options), ['0.5.9']);
});
