import { createOptions, getPackageVersions } from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  const packageVersions = getPackageVersions(options);

  console.log(packageVersions);
}
