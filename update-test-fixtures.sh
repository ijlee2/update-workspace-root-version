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
rm -r "tests/fixtures/monorepo-highest-version-1/output"
cp -r "tests/fixtures/monorepo-highest-version-1/input" "tests/fixtures/monorepo-highest-version-1/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/monorepo-highest-version-1/output"

# Update fixtures
rm -r "tests/fixtures/monorepo-highest-version-2/output"
cp -r "tests/fixtures/monorepo-highest-version-2/input" "tests/fixtures/monorepo-highest-version-2/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/monorepo-highest-version-2/output"

# Update fixtures
rm -r "tests/fixtures/monorepo-highest-version-3/output"
cp -r "tests/fixtures/monorepo-highest-version-3/input" "tests/fixtures/monorepo-highest-version-3/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/monorepo-highest-version-3/output"

# Update fixtures
rm -r "tests/fixtures/monorepo-highest-version-edge-case/output"
cp -r "tests/fixtures/monorepo-highest-version-edge-case/input" "tests/fixtures/monorepo-highest-version-edge-case/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/monorepo-highest-version-edge-case/output"

# Update fixtures
rm -r "tests/fixtures/monorepo-increment-by-one-1/output"
cp -r "tests/fixtures/monorepo-increment-by-one-1/input" "tests/fixtures/monorepo-increment-by-one-1/output"

./dist/bin/update-workspace-root-version.js \
  --algorithm increment-by-one \
  --root "tests/fixtures/monorepo-increment-by-one-1/output"

# Update fixtures
rm -r "tests/fixtures/monorepo-increment-by-one-edge-case/output"
cp -r "tests/fixtures/monorepo-increment-by-one-edge-case/input" "tests/fixtures/monorepo-increment-by-one-edge-case/output"

./dist/bin/update-workspace-root-version.js \
  --algorithm increment-by-one \
  --root "tests/fixtures/monorepo-increment-by-one-edge-case/output"

# Update fixtures
rm -r "tests/fixtures/not-monorepo/output"
cp -r "tests/fixtures/not-monorepo/input" "tests/fixtures/not-monorepo/output"

./dist/bin/update-workspace-root-version.js \
  --root "tests/fixtures/not-monorepo/output"
