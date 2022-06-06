---
description: Welcome to RRPM Documentation!
cover: .gitbook/assets/banner.png
coverY: 0
---

# Introduction

### System Requirements

RRPM requires Python 3.7+. A minimum 8-bit color system terminal is recommended although 4-bit terminals are also supported. Package managers need to be installed for being available as part of presets.



### Installation

**RRPM** can be installed through pip or by building from the source.

{% hint style="info" %}
Installing through pip is recommended
{% endhint %}

{% tabs %}
{% tab title="Universal" %}
```bash
pip install rrpm
```
{% endtab %}
{% endtabs %}

#### Building from Source

{% tabs %}
{% tab title="Universal" %}
```bash
git clone https://github.com/pybash1/rrpm.git
cd rrpm
poetry install
```
{% endtab %}
{% endtabs %}

### Checking the Installation

You can check if RRPM is installed correctly by runnning the following command

{% tabs %}
{% tab title="Universal" %}
```bash
python -m rrpm --help // or rrpm --help if you installed it globally
```
{% endtab %}
{% endtabs %}

### Uninstall

Uninstalling RRPM is as simple as installing it

{% tabs %}
{% tab title="Universal" %}
```bash
pip uninstall rrpm
```
{% endtab %}
{% endtabs %}
