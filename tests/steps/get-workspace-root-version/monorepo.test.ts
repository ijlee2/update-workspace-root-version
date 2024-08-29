import { assert, loadFixture, test } from '@codemod-utils/tests';

import { getWorkspaceRootVersion } from '../../../src/steps/index.js';
import { inputProject } from '../../fixtures/monorepo-highest-version-1/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/monorepo-highest-version-1.js';

test('steps | get-workspace-root-version > monorepo', function () {
  loadFixture(inputProject, codemodOptions);

  assert.strictEqual(getWorkspaceRootVersion(options), '0.4.0');
});
