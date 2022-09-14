# tree

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
