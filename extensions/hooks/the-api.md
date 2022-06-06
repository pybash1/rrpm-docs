---
description: The Hook Extension API
---

# The API

### The Extension Loader

The loader is a simple script that loads extensions one by one from the `ext_dir` as specified in the `config.toml` file.

The code looks like this

```python
def load_extension(path, name):
    sys.path.append(path)
    try:
        return importlib.import_module(name, package=path)
    except ImportError:
        return None
```

Hence, any extension that has the same name as other extensions the user already has installed or is part of the standard library, can cause conflicts. It is recommended not to name them so.

Every extension must have a `pre_fetcht` and `post_fetch` functions. `pre_fetch` is called before a repository is fetched and `post_fetch` after as shown below. Both the functions should take in a `url` as a parameter. 

```python
def pre_fetch(url):
    # do something

def post_fetch(url):
    # do something
```
