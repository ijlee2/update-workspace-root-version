import { normalize } from 'node:path';

import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'highest-version',
  projectRoot: normalize('tmp/monorepo-highest-version-3'),
};

const options: Options = {
  algorithm: 'highest-version',
  projectRoot: normalize('tmp/monorepo-highest-version-3'),
};

export { codemodOptions, options };
