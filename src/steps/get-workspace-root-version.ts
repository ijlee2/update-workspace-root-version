import { readPackageJson } from '@codemod-utils/json';

import { Options } from '../types/index.js';

export function getWorkspaceRootVersion(options: Options): string {
  const { projectRoot } = options;

  const packageJson = readPackageJson({ projectRoot });

  return packageJson['version'] ?? '0.0.0';
}
