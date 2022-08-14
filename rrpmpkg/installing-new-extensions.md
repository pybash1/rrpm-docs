---
sidebar_position: 3
---

# Installing New Extensions

Extensions can be installed using the `rrpmpkg install` command. For the `package` argument to this command you can either provide a GitHub Repository in the format, `username/repository`, or in the format `github.com/username/repository` or, you can provide a custom git repository URL, such as `myhosting.com/username/repository`. RRPMPkg is smart enough to detect and install accordingly.

```python
$ rrpmpkg install rrpm-org/extension
Installing 'rrpm-org/extension' extension
Collecting packages ...
$ rrpmpkg install rrpm-org/anotherextension --no-install-deps
Installing 'rrpm-org/anotherextension' extension
$ rrpmpkg install rrpm-org/yetanotherext
Installing 'rrpm-org/yetanotherext' extensions
WARNING: Failed to install dependencies! No requirements.txt file found!
```