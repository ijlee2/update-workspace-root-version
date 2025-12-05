import {
  assertFixture,
  loadFixture,
  normalizeFile,
  test,
} from '@codemod-utils/tests';

import { updateWorkspaceRootVersion } from '../../../src/steps/index.js';
import { inputProject } from '../../fixtures/not-monorepo/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/not-monorepo.js';

test('steps | update-workspace-root-version > not monorepo', function () {
  loadFixture(inputProject, codemodOptions);

  updateWorkspaceRootVersion('0.4.1', options);

  assertFixture(
    {
      '.gitkeep': '',
      'package.json': normalizeFile([
        `{`,
        `  "name": "a",`,
        `  "version": "0.4.1"`,
        `}`,
        ``,
      ]),
    },
    codemodOptions,
  );
});
