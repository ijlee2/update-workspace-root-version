import {
  assertFixture,
  loadFixture,
  normalizeFile,
  test,
} from '@codemod-utils/tests';

import { updateWorkspaceRootVersion } from '../../../src/steps/index.js';
import { inputProject } from '../../fixtures/monorepo-highest-version-1/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/monorepo-highest-version-1.js';

test('steps | update-workspace-root-version > monorepo', function () {
  loadFixture(inputProject, codemodOptions);

  updateWorkspaceRootVersion('0.4.1', options);

  assertFixture(
    {
      '.gitkeep': '',
      'package.json': normalizeFile([
        `{`,
        `  "name": "workspace-root",`,
        `  "version": "0.4.1",`,
        `  "private": true`,
        `}`,
        ``,
      ]),
      packages: {
        a: {
          'package.json': normalizeFile([
            `{`,
            `  "name": "a",`,
            `  "version": "0.3.1"`,
            `}`,
            ``,
          ]),
        },
        b: {
          'package.json': normalizeFile([
            `{`,
            `  "name": "b",`,
            `  "version": "0.4.0"`,
            `}`,
            ``,
          ]),
        },
        c: {
          'package.json': normalizeFile([
            `{`,
            `  "name": "c",`,
            `  "version": "0.2.5"`,
            `}`,
            ``,
          ]),
        },
        d: {
          'package.json': normalizeFile([
            `{`,
            `  "name": "d",`,
            `  "version": "0.3.4"`,
            `}`,
            ``,
          ]),
        },
        e: {
          'package.json': normalizeFile([
            `{`,
            `  "name": "e",`,
            `  "version": "0.2.0"`,
            `}`,
            ``,
          ]),
        },
      },
    },
    codemodOptions,
  );
});
