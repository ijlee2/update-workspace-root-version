import {
  createOptions,
  getNewVersion,
  getPackageVersions,
  getWorkspaceRootVersion,
  updateWorkspaceRootVersion,
} from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const packageVersions = getPackageVersions(options);
  const workspaceRootVersion = getWorkspaceRootVersion(options);

  const version = getNewVersion(packageVersions, workspaceRootVersion, options);
  updateWorkspaceRootVersion(version, options);
}
