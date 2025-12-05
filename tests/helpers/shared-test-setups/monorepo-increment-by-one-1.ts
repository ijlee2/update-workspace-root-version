import { normalize } from 'node:path';

import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'increment-by-one',
  projectRoot: normalize('tmp/monorepo-increment-by-one-1'),
};

const options: Options = {
  algorithm: 'increment-by-one',
  projectRoot: normalize('tmp/monorepo-increment-by-one-1'),
};

export { codemodOptions, options };
