import { Options } from '../types/index.js';
import { compare, increment } from '../utils/versions/index.js';

function highestVersion(
  packageVersions: string[],
  workspaceRootVersion: string,
): string {
  const versions = [...packageVersions, increment(workspaceRootVersion)];

  return versions.sort(compare)[0]!;
}

export function getNewVersion(
  packageVersions: string[],
  workspaceRootVersion: string,
  options: Options,
): string {
  switch (options.algorithm) {
    case 'highest-version': {
      return highestVersion(packageVersions, workspaceRootVersion);
    }

    case 'increment-by-one': {
      return workspaceRootVersion;
    }
  }
}
