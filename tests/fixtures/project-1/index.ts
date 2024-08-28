import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('project-1/input');
const outputProject = convertFixtureToJson('project-1/output');

export { inputProject, outputProject };
