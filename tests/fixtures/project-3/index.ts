import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('project-3/input');
const outputProject = convertFixtureToJson('project-3/output');

export { inputProject, outputProject };
