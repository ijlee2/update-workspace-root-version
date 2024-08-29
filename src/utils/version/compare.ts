export function compare(version1: string, version2: string) {
  const versions1 = version1.split('.');
  const versions2 = version2.split('.');

  for (let i = 0; i < 3; i++) {
    const value1 = Number(versions1[i]);
    const value2 = Number(versions2[i]);

    if (value1 > value2) {
      return -1;
    }

    if (value1 < value2) {
      return 1;
    }
  }

  return 0;
}
