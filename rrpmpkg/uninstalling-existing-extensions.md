---
---

# Uninstalling Existing Extensions

Extensions can be installed using the `rrpmpkg uninstall` command. For the `package` argument to this command you can either provide a Git Repository in the format, `username/repository`, or you can provide just the name of a pacakge in the format `package-name`. RRPMPkg is smart enough to detect and uninstall accordingly.

```python
$ rrpmpkg uninstall rrpm-org/extension
Uninstalling 'rrpm-org/extension' extension
$ rrpmpkg uninstall random
Uninstalling 'random' extension
Extension is not installed!
```