#!/usr/bin/env node
'use strict';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { runCodemod } from '../src/index.js';
import type { CodemodOptions } from '../src/types/index.js';

// Provide a title to the process in `ps`
process.title = 'update-workspace-root-version';

// Set codemod options
const argv = yargs(hideBin(process.argv))
  .option('algorithm', {
    choices: ['highest-version', 'increment-by-one'] as const,
    describe: 'How to update the workspace root version',
    type: 'string',
  })
  .option('root', {
    describe: 'Where to run the codemod',
    type: 'string',
  })
  .parseSync();

const codemodOptions: CodemodOptions = {
  algorithm: argv['algorithm'] ?? 'highest-version',
  projectRoot: argv['root'] ?? process.cwd(),
};

runCodemod(codemodOptions);
