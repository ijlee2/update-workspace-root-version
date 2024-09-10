import { assert, loadFixture, test } from '@codemod-utils/tests';

import { getPackageVersions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/monorepo-highest-version-1.js';

test('steps | get-package-versions > version is missing', function () {
  loadFixture(
    {
      'package.json': '{\n  "name": "workspace-root",\n  "private": true\n}\n',
    },
    codemodOptions,
  );

  assert.deepStrictEqual(getPackageVersions(options), []);
});
