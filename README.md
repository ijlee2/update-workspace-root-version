[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/update-workspace-root-version/actions/workflows/ci.yml/badge.svg)](https://github.com/ijlee2/update-workspace-root-version/actions/workflows/ci.yml)

# update-workspace-root-version

1. [Why use it?](#why-use-it)
1. [Usage](#usage)
    - [Arguments](#arguments)
    - [Limitations](#limitations)
1. [Compatibility](#compatibility)
1. [Contributing](#contributing)
1. [License](#license)


## Why use it?

Git tags mark a specific point in a repo's history and are usually created at the time of release. Thanks to these tags, we can easily send people links and point to specific code. We can also compare tags to see how files have changed.

Creating tags can be tricky in monorepos, because we can release many packages at once. How do we create just 1 tag (no matter how many packages) and give it a name that resembles a [semantic version](https://semver.org/)?

Solution: We let the version of the workspace root indicate the state of the whole project, then set the tag name to be this version. `update-workspace-root-version` helps you update the version automatically.


## Usage

At the workspace root, install `update-workspace-root-version` as a development dependency.

Then, run the codemod before you create a tag. For example, after [changesets](https://github.com/changesets/changesets) updates all package versions, we update the workspace root's version.

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

The codemod assumes that every package follows semantic versioning. It is designed to cover typical cases.


## Compatibility

- Node.js v18 or above


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
