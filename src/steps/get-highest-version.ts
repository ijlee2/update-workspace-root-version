import { compare, increment } from '../utils/versions/index.js';

export function getHighestVersion(
  packageVersions: string[],
  workspaceRootVersion: string,
): string {
  const versions = [...packageVersions, increment(workspaceRootVersion)];

  return versions.sort(compare)[0]!;
}
