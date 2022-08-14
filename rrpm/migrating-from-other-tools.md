---
sidebar_position: 2
---

# Migrating from Other Tools

rrpm provides an easy way to migrate from other tools such as `fgh`, `ghq` or even your own project structure. The method for migration is same regardless of the tool and is just one command.

:::warning
All your local commits in all the projects will be lost
:::

The `rrpm migrate` command migrates all the repositories from the given directory.

#### Usage
```bash
Usage: rrpm migrate [OPTIONS] PATH

  Migrate and import all repositories from another directory

Arguments:
  PATH  [required]

Options:
  --help  Show this message and exit.
```