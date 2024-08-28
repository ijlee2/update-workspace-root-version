import {
  createOptions,
  getHighestVersion,
  getPackageVersions,
  getWorkspaceRootVersion,
  updateWorkspaceRootVersion,
} from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const packageVersions = getPackageVersions(options);
  const workspaceRootVersion = getWorkspaceRootVersion(options);
  const highestVersion = getHighestVersion(
    packageVersions,
    workspaceRootVersion,
  );

  updateWorkspaceRootVersion(highestVersion, options);
}
