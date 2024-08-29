import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('monorepo-highest-version-2/input');
const outputProject = convertFixtureToJson('monorepo-highest-version-2/output');

export { inputProject, outputProject };
