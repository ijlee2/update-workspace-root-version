import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('project-2/input');
const outputProject = convertFixtureToJson('project-2/output');

export { inputProject, outputProject };
