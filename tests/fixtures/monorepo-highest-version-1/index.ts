import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('monorepo-highest-version-1/input');
const outputProject = convertFixtureToJson('monorepo-highest-version-1/output');

export { inputProject, outputProject };
