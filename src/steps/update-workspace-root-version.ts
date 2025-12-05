import { writeFileSync } from 'node:fs';
import { EOL } from 'node:os';
import { join } from 'node:path';

import { readPackageJson } from '@codemod-utils/package-json';

import type { Options } from '../types/index.js';

export function updateWorkspaceRootVersion(
  version: string,
  options: Options,
): void {
  const { projectRoot } = options;

  const packageJson = readPackageJson({ projectRoot });

  packageJson['version'] = version;

  const destination = join(projectRoot, 'package.json');
  const file = JSON.stringify(packageJson, null, 2).replaceAll('\n', EOL) + EOL;

  writeFileSync(destination, file, 'utf8');
}
