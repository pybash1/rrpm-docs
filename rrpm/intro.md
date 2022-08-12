---
sidebar_position: 1
---

# Introduction

### System Requirements

RRPM requires Python 3.7+. A minimum 8-bit color system terminal is recommended although 4-bit terminals are also supported. Package managers need to be installed for being available as part of presets.



### Installation

**RRPM** can be installed through pip or by building from the source.

:::info
Installing through `pip` is recommended
:::

```bash title=Terminal
pip install rrpm
```

#### Building from Source

```bash title=Terminal
git clone https://github.com/pybash1/rrpm.git
cd rrpm
poetry install
```

### Checking the Installation

You can check if RRPM is installed correctly by runnning the following command

```bash title=Terminal
python -m rrpm --help // or rrpm --help if you installed it globally
```
### Uninstall
Uninstalling RRPM is as simple as installing it

```bash title=Terminal
pip uninstall rrpm
```