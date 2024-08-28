import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { readPackageJson } from '@codemod-utils/json';

import { Options } from '../types/index.js';

export function updateWorkspaceRootVersion(
  version: string,
  options: Options,
): void {
  const { projectRoot } = options;

  const packageJson = readPackageJson({ projectRoot });

  packageJson['version'] = version;

  const destination = join(projectRoot, 'package.json');
  const file = JSON.stringify(packageJson, null, 2) + '\n';

  writeFileSync(destination, file, 'utf8');
}
