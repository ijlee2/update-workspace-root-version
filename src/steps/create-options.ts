import type { CodemodOptions, Options } from '../types/index.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { algorithm, projectRoot } = codemodOptions;

  return {
    algorithm,
    projectRoot,
  };
}
