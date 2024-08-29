import { assert, loadFixture, test } from '@codemod-utils/tests';

import { getPackageVersions } from '../../../src/steps/index.js';
import { inputProject } from '../../fixtures/monorepo-highest-version-1/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/monorepo-highest-version-1.js';

test('steps | get-package-versions > monorepo', function () {
  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(getPackageVersions(options), [
    '0.3.1',
    '0.4.0',
    '0.2.5',
    '0.3.4',
    '0.2.0',
  ]);
});
