import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/not-monorepo',
};

const options: Options = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/not-monorepo',
};

export { codemodOptions, options };
