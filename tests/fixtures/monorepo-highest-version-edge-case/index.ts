import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('monorepo-highest-version-edge-case/input');
const outputProject = convertFixtureToJson('monorepo-highest-version-edge-case/output');

export { inputProject, outputProject };
