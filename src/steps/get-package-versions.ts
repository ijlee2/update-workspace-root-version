import { getPackageRoots } from '@codemod-utils/files';
import { readPackageJson } from '@codemod-utils/json';

import type { Options } from '../types/index.js';
import { allow } from '../utils/version/index.js';

export function getPackageVersions(options: Options): string[] {
  const packageRoots = getPackageRoots(options);

  return packageRoots
    .map((packageRoot) => {
      try {
        const packageJson = readPackageJson({ projectRoot: packageRoot });

        return packageJson['version'];
      } catch {
        return undefined;
      }
    })
    .filter(allow) as string[];
}
