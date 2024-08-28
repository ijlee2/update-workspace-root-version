import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/project-3',
};

const options: Options = {
  algorithm: 'highest-version',
  projectRoot: 'tmp/project-3',
};

export { codemodOptions, options };
