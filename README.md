[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/update-workspace-root-version/actions/workflows/ci.yml/badge.svg)](https://github.com/ijlee2/update-workspace-root-version/actions/workflows/ci.yml)

# update-workspace-root-version

_Update the workspace root version in a monorepo_

1. [Why use it?](#why-use-it)
1. [Usage](#usage)
    - [Arguments](#arguments)
    - [Limitations](#limitations)
1. [Compatibility](#compatibility)
1. [Contributing](#contributing)
1. [License](#license)


## Why use it?

A release tag helps us easily see the project at a past point in time. Naming the release tag can be tricky in a monorepo, because we can release many packages at once.

We can solve the naming problem if the workspace root version represents the state of the project: We simply set the tag name to be the workspace root version.


## Usage

At the workspace root, install `update-workspace-root-version` as a development dependency. Run the codemod after updating the package versions.

For example, with [changesets](https://github.com/changesets/changesets),

```json5
/* package.json */
{
  "scripts": {
    "release:changelog": "changeset version; update-workspace-root-version",
  },
  "devDependencies": {
    "@changesets/cli": "...",
    "update-workspace-root-version": "..."
  }
}
```


### Arguments

<details>

<summary>Optional: Specify the algorithm</summary>

```sh
# Highest version (default)
update-workspace-root-version --algorithm highest-version

# Increment by one
update-workspace-root-version --algorithm increment-by-one
```

</details>


### Limitations

The codemod is designed to cover typical cases. It is not designed to cover one-off cases.

To better meet your needs, consider cloning the repo and running the codemod locally.

```sh
cd <path/to/cloned/repo>

# Compile TypeScript
pnpm build

# Run codemod
./dist/bin/update-workspace-root-version.js --root <path/to/your/project>
```


## Compatibility

- Node.js v18 or above


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
