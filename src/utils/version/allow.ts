export function allow(version: string | undefined): boolean {
  if (!version) {
    return false;
  }

  return new RegExp(/^\d+\.\d+\.\d+$/).test(version);
}
