import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';
import { readPackageJson } from '@codemod-utils/json';

import { Options } from '../types/index.js';
import { allowVersion } from '../utils/versions/allow-version.js';

function getPackageRoots(options: Options): string[] {
  const { projectRoot } = options;

  const packageRoots = findFiles('**/package.json', {
    ignoreList: ['**/{dist,node_modules}/**/*'],
    projectRoot,
  }).map((filePath) => {
    return join(projectRoot, filePath.replace(/package\.json$/, ''));
  });

  const isMonorepo = packageRoots.length > 1;

  if (isMonorepo) {
    // Remove the workspace root
    return packageRoots.filter((packageRoot) => packageRoot !== projectRoot);
  }

  return packageRoots;
}

export function getPackageVersions(options: Options): string[] {
  const packageRoots = getPackageRoots(options);

  return packageRoots
    .map((packageRoot) => {
      const packageJson = readPackageJson({ projectRoot: packageRoot });

      return packageJson['version'];
    })
    .filter(allowVersion) as string[];
}
