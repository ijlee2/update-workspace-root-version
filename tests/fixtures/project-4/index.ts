import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('project-4/input');
const outputProject = convertFixtureToJson('project-4/output');

export { inputProject, outputProject };
