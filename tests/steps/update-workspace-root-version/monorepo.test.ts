import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

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
      'package.json':
        '{\n  "name": "workspace-root",\n  "version": "0.4.1",\n  "private": true\n}\n',
      packages: {
        a: {
          'package.json': '{\n  "name": "a",\n  "version": "0.3.1"\n}\n',
        },
        b: {
          'package.json': '{\n  "name": "b",\n  "version": "0.4.0"\n}\n',
        },
        c: {
          'package.json': '{\n  "name": "c",\n  "version": "0.2.5"\n}\n',
        },
        d: {
          'package.json': '{\n  "name": "d",\n  "version": "0.3.4"\n}\n',
        },
        e: {
          'package.json': '{\n  "name": "e",\n  "version": "0.2.0"\n}\n',
        },
      },
    },
    codemodOptions,
  );
});
