---
sidebar_position: 3
---

# Managing Remote Repositories

### Cloning Remote Repositories

Remote Git repositories such as those hosted on GitHub or GitLab can be cloned by using the `rrpm get` command as shown below.

```bash
$ python -m rrpm get github.com/pybash1/rrpm # notice that the https:// and .git are optional.
Fetching GitHub Repository
Successfully cloned repository in github.com/pybash1/rrpm
```

The above command clones the `pybash1/rrpm` repository to the directory `%USERPROFILE%\Projects` on Windows and `~/Projects` on Unix by default. this can be changed in the `config.toml` file.

:::tip
Read more about the config file [here](./the-config-toml-file.md)
:::

#### Usage

```bash
Usage: python -m rrpm get [OPTIONS] URL
  Clone a remote repository to directory specified in config
Arguments:
  URL  [required]
Options:
  --help  Show this message and exit.
```

### Listing Cloned Repositories

:::info
Starting from v1.4.0, rrpm comes with 2 commands to list cloned repositores: `tree` and `list`
:::

:::warning
Start from v.1.4.0, `rrpm list` has been renamed to `rrpm tree`
:::

The `rrpm tree` command can be used to display a tree of the of the projects cloned to the root directory as shown below

```bash
$ python -m rrpm tree
C:\Users\mitra\Projects
  |- github.com
      |- CutCode-org
          |- CutCode-svelte
      |- github
          |- gitignore
      |- pastegram
          |- backend
      |- pybash1
          |- pm
          |- portfolio
          |- pybash1
          |- rrpm
```

#### Usage

```bash
Usage: rrpm tree [OPTIONS]

  List all cloned repositories and generated projects

Options:
  --help  Show this message and exit.
```

The `rrpm list` command can be used to display a table containing the metadata for all cloned repositories as shown below

```bash
$ python -m rrpm list
                         List of Repositories
┌────────────┬───────────────┬────────────┬──────────────────────────┐
│ Site       │ Repository    │ Owner      │ Shorthand                │
├────────────┼───────────────┼────────────┼──────────────────────────┤
│ github.com │ api           │ authdeck   │ authdeck/api             │
│ github.com │ app           │ authdeck   │ authdeck/app             │
│ github.com │ docs          │ authdeck   │ authdeck/docs            │
│ github.com │ landing       │ authdeck   │ authdeck/landing         │
│ github.com │ .dotfiles     │ pybash1    │ pybash1/.dotfiles        │
│ github.com │ pybash1       │ pybash1    │ pybash1/pybash1          │
│ github.com │ pocketbase    │ pybsah1    │ pybash1/pocketbase       │
│ github.com │ portfolio     │ pybash1    │ pybash1/portfolio        │
│ github.com │ seas          │ pybash1    │ pybash1/seas             │
│ github.com │ bat           │ catppuccin │ catppuccin/bat           │
│ github.com │ cursors       │ catppuccin │ catppuccin/cursors       │
│ github.com │ windows-files │ catppuccin │ catppuccin/windows-files │
│ github.com │ yasb          │ denBot     │ denBot/yasb              │
│ github.com │ open-sponsor  │ milan090   │ milan090/open-sponsor    │
│ github.com │ mov-cli       │ mov-cli    │ mov-cli/mov-cli          │
│ github.com │ maze.py       │ pipeseroni │ pipeseroni/maze.py       │
│ github.com │ .dotfiles     │ pybash1    │ pybash1/.dotfiles        │
│ github.com │ befit         │ pybash1    │ pybash1/befit            │
│ github.com │ gitfo         │ pybash1    │ pybash1/gitfo            │
│ github.com │ image3        │ pybash1    │ pybash1/image3           │
│ github.com │ learnist      │ pybash1    │ pybash1/learnist         │
│ github.com │ openauth      │ pybash1    │ pybash1/openauth         │
│ github.com │ portfolio     │ pybash1    │ pybash1/portfolio        │
│ github.com │ rrpm          │ pybash1    │ pybash1/rrpm             │
│ github.com │ solodustries  │ pybash1    │ pybash1/solodustries     │
│ github.com │ tapettim      │ pybash1    │ pybash1/tapettim         │
│ github.com │ docs          │ rrpm-org   │ rrpm-org/docs            │
│ github.com │ rrpm          │ rrpm-org   │ rrpm-org/rrpm            │
│ github.com │ rrpmpkg       │ rrpm-org   │ rrpm-org/rrpmpkg         │
└────────────┴───────────────┴────────────┴──────────────────────────┘
Total Repositories: 29
```

The root directory is as per the `config.toml` file.

#### Usage

```bash
Usage: rrpm list [OPTIONS]

Options:
  --help  Show this message and exit.
```

### Removing Cloned Repositories

:::note
New in verson v1.4.0
:::

The `rrpm remove` command can be used to remove a cloned repository or generated project.

#### Usage
```bash
Usage: rrpm remove [OPTIONS] SHORTHAND

  Remove a cloned repository

Arguments:
  SHORTHAND  [required]

Options:
  --help  Show this message and exit.
```