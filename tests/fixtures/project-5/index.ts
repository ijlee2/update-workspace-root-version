import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('project-5/input');
const outputProject = convertFixtureToJson('project-5/output');

export { inputProject, outputProject };
