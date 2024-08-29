import { assert, loadFixture, test } from '@codemod-utils/tests';

import { getWorkspaceRootVersion } from '../../../src/steps/index.js';
import { inputProject } from '../../fixtures/not-monorepo/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/not-monorepo.js';

test('steps | get-workspace-root-version > not monorepo', function () {
  loadFixture(inputProject, codemodOptions);

  assert.strictEqual(getWorkspaceRootVersion(options), '0.5.9');
});
