import { assert, loadFixture, test } from '@codemod-utils/tests';

import { getPackageVersions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/monorepo-highest-version-1.js';

test('steps | get-package-versions > file cannot be parsed', function () {
  loadFixture(
    {
      'package.json': [
        '<% if (options.codemod.hasTypeScript) { %>{',
        '  "name": "<%= options.codemod.name %>",',
        '  "version": "0.0.0"',
        '}<% } %>',
      ].join('\n'),
    },
    codemodOptions,
  );

  assert.deepStrictEqual(getPackageVersions(options), []);
});
