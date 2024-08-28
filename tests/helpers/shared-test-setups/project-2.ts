import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/project-2',
};

const options: Options = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/project-2',
};

export { codemodOptions, options };
