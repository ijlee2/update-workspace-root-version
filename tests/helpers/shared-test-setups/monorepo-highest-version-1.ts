import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/monorepo-highest-version-1',
};

const options: Options = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/monorepo-highest-version-1',
};

export { codemodOptions, options };
