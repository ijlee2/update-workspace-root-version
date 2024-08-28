import {
  createOptions,
  getPackageVersions,
  getWorkspaceRootVersion,
} from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const packageVersions = getPackageVersions(options);
  const workspaceRootVersion = getWorkspaceRootVersion(options);

  console.log(packageVersions);
  console.log(workspaceRootVersion);
}
