import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/monorepo-highest-version-edge-case',
};

const options: Options = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/monorepo-highest-version-edge-case',
};

export { codemodOptions, options };
