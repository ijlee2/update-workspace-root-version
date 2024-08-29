import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('monorepo-increment-by-one-1/input');
const outputProject = convertFixtureToJson('monorepo-increment-by-one-1/output');

export { inputProject, outputProject };
