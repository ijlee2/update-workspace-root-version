import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('monorepo-increment-by-one-edge-case/input');
const outputProject = convertFixtureToJson('monorepo-increment-by-one-edge-case/output');

export { inputProject, outputProject };
