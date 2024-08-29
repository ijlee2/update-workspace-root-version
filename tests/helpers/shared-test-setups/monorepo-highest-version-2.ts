import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/monorepo-highest-version-2',
};

const options: Options = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/monorepo-highest-version-2',
};

export { codemodOptions, options };
