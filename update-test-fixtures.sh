#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code.
#
#  B. Usage
#
#    ./update-test-fixtures.sh
#
#---------

# Compile TypeScript
pnpm build

# Update fixtures
rm -r "tests/fixtures/project-1/output"
cp -r "tests/fixtures/project-1/input" "tests/fixtures/project-1/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/project-1/output"

# Update fixtures
rm -r "tests/fixtures/project-2/output"
cp -r "tests/fixtures/project-2/input" "tests/fixtures/project-2/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/project-2/output"

# Update fixtures
rm -r "tests/fixtures/project-3/output"
cp -r "tests/fixtures/project-3/input" "tests/fixtures/project-3/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/project-3/output"

# Update fixtures
rm -r "tests/fixtures/project-4/output"
cp -r "tests/fixtures/project-4/input" "tests/fixtures/project-4/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/project-4/output"

# Update fixtures
rm -r "tests/fixtures/project-5/output"
cp -r "tests/fixtures/project-5/input" "tests/fixtures/project-5/output"

./dist/bin/update-workspace-root-version.js \
  --algorithm increment-by-one \
  --root "tests/fixtures/project-5/output"
