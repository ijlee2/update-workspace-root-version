import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('monorepo-highest-version-3/input');
const outputProject = convertFixtureToJson('monorepo-highest-version-3/output');

export { inputProject, outputProject };
