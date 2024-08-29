import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('not-monorepo/input');
const outputProject = convertFixtureToJson('not-monorepo/output');

export { inputProject, outputProject };
