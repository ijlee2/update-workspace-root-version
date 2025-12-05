import { normalize } from 'node:path';

import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'highest-version',
  projectRoot: normalize('tmp/not-monorepo'),
};

const options: Options = {
  algorithm: 'highest-version',
  projectRoot: normalize('tmp/not-monorepo'),
};

export { codemodOptions, options };
