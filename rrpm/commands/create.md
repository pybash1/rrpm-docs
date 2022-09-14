# create

:::warning
Certain projects require certain tools to be installed for them to work
:::

We will use the `rrpm create` command to generate projects based on the preset and variation we select as shown below.

<!-- ![Creating A Project](<.gitbook/assets/rrpm (1).gif>) -->
![tutorial](../assets/creating-project.gif)

#### Usage

```bash
Usage: python -m rrpm create [OPTIONS] NAME
  Generate a project from any of the presets and/or its variations
Arguments:
  NAME  [required]
Options:
  --src / --no-src  [default: no-src]
  --help            Show this message and exit.
```

* `[NAME]`: Name of the project. Required for all presets.
* `--src` / `--no-src`: Applicable for poetry projects only