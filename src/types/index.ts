type Algorithm = 'highest-version' | 'increment-by-one';

type CodemodOptions = {
  algorithm: Algorithm;
  projectRoot: string;
};

type Options = {
  algorithm: Algorithm;
  projectRoot: string;
};

export type { CodemodOptions, Options };
