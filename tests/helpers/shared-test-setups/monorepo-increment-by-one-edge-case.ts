import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'increment-by-one',
  projectRoot: 'tmp/monorepo-increment-by-one-edge-case',
};

const options: Options = {
  algorithm: 'increment-by-one',
  projectRoot: 'tmp/monorepo-increment-by-one-edge-case',
};

export { codemodOptions, options };
