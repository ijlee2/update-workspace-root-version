import { Options } from '../types/index.js';
import { compare, increment } from '../utils/versions/index.js';

export function getNewVersion(
  packageVersions: string[],
  workspaceRootVersion: string,
  options: Options,
): string {
  switch (options.algorithm) {
    case 'highest-version': {
      const versions = [...packageVersions, increment(workspaceRootVersion)];

      return versions.sort(compare)[0]!;
    }

    case 'increment-by-one': {
      return increment(workspaceRootVersion);
    }
  }
}
