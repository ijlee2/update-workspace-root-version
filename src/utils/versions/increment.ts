export function increment(version: string): string {
  const versions = version.split('.');

  return [
    Number(versions[0]),
    Number(versions[1]),
    Number(versions[2]) + 1,
  ].join('.');
}
