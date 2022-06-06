---
description: Install tab completion for your shell
---

# Completions

RRPM supports installing completions for various different shells, thanks to [Typer](https://typer.tiangolo.com).

{% tabs %}
{% tab title="Bash" %}
```bash
python -m rrpm --install-completion bash
```
{% endtab %}

{% tab title="Fish" %}
```bash
python -m rrpm --install-completion fish
```
{% endtab %}

{% tab title="Zsh" %}
```bash
python -m rrpm --install-completion zsh
```

Add the following line to your `~/.zshrc` file

```
fpath+=~/.zfunc
```
{% endtab %}

{% tab title="Oh-My-Zsh" %}
```bash
mkdir $ZSH_CUSTOM/plugins/rrpm
python -m rrpm --show-completion zsh > $ZSH_CUSTOM/plugins/rrmp/_rrpm
```

Edit the plugins line in your `~/.zshrc` to add the rrpm plugin

```
plugins = (rrpm ...)
```
{% endtab %}

{% tab title="Powershell" %}
```bash
python -m rrpm --install-completion powershell
```
{% endtab %}

{% tab title="PWSH" %}
```bash
python -m rrpm --install-completion pwsh
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Shell needs to be restarted for changes to take effect
{% endhint %}
