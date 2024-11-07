create-padma
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-padma.svg)](https://npmjs.org/package/create-padma)
[![Downloads/week](https://img.shields.io/npm/dw/create-padma.svg)](https://npmjs.org/package/create-padma)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-padma
$ create-padma COMMAND
running command...
$ create-padma (--version)
create-padma/0.0.1-alpha.0 darwin-arm64 node-v20.12.2
$ create-padma --help [COMMAND]
USAGE
  $ create-padma COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-padma create PERSON`](#create-padma-create-person)
* [`create-padma create padma PROJECTNAME`](#create-padma-create-padma-projectname)
* [`create-padma hello PERSON`](#create-padma-hello-person)
* [`create-padma hello world`](#create-padma-hello-world)
* [`create-padma help [COMMAND]`](#create-padma-help-command)
* [`create-padma plugins`](#create-padma-plugins)
* [`create-padma plugins add PLUGIN`](#create-padma-plugins-add-plugin)
* [`create-padma plugins:inspect PLUGIN...`](#create-padma-pluginsinspect-plugin)
* [`create-padma plugins install PLUGIN`](#create-padma-plugins-install-plugin)
* [`create-padma plugins link PATH`](#create-padma-plugins-link-path)
* [`create-padma plugins remove [PLUGIN]`](#create-padma-plugins-remove-plugin)
* [`create-padma plugins reset`](#create-padma-plugins-reset)
* [`create-padma plugins uninstall [PLUGIN]`](#create-padma-plugins-uninstall-plugin)
* [`create-padma plugins unlink [PLUGIN]`](#create-padma-plugins-unlink-plugin)
* [`create-padma plugins update`](#create-padma-plugins-update)

## `create-padma create PERSON`

Say hello

```
USAGE
  $ create-padma create PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ create-padma create friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/create/index.ts](https://github.com/js-template/padma/blob/v0.0.1-alpha.0/src/commands/create/index.ts)_

## `create-padma create padma PROJECTNAME`

Create a new Padma demo project

```
USAGE
  $ create-padma create padma PROJECTNAME

ARGUMENTS
  PROJECTNAME  Name of the project

DESCRIPTION
  Create a new Padma demo project
```

_See code: [src/commands/create/padma.ts](https://github.com/js-template/padma/blob/v0.0.1-alpha.0/src/commands/create/padma.ts)_

## `create-padma hello PERSON`

Say hello

```
USAGE
  $ create-padma hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ create-padma hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/js-template/padma/blob/v0.0.1-alpha.0/src/commands/hello/index.ts)_

## `create-padma hello world`

Say hello world

```
USAGE
  $ create-padma hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ create-padma hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/js-template/padma/blob/v0.0.1-alpha.0/src/commands/hello/world.ts)_

## `create-padma help [COMMAND]`

Display help for create-padma.

```
USAGE
  $ create-padma help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for create-padma.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.16/src/commands/help.ts)_

## `create-padma plugins`

List installed plugins.

```
USAGE
  $ create-padma plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ create-padma plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/index.ts)_

## `create-padma plugins add PLUGIN`

Installs a plugin into create-padma.

```
USAGE
  $ create-padma plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into create-padma.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CREATE_PADMA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CREATE_PADMA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ create-padma plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ create-padma plugins add myplugin

  Install a plugin from a github url.

    $ create-padma plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ create-padma plugins add someuser/someplugin
```

## `create-padma plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ create-padma plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ create-padma plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/inspect.ts)_

## `create-padma plugins install PLUGIN`

Installs a plugin into create-padma.

```
USAGE
  $ create-padma plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into create-padma.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CREATE_PADMA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CREATE_PADMA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ create-padma plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ create-padma plugins install myplugin

  Install a plugin from a github url.

    $ create-padma plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ create-padma plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/install.ts)_

## `create-padma plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ create-padma plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ create-padma plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/link.ts)_

## `create-padma plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-padma plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-padma plugins unlink
  $ create-padma plugins remove

EXAMPLES
  $ create-padma plugins remove myplugin
```

## `create-padma plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ create-padma plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/reset.ts)_

## `create-padma plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-padma plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-padma plugins unlink
  $ create-padma plugins remove

EXAMPLES
  $ create-padma plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/uninstall.ts)_

## `create-padma plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-padma plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-padma plugins unlink
  $ create-padma plugins remove

EXAMPLES
  $ create-padma plugins unlink myplugin
```

## `create-padma plugins update`

Update installed plugins.

```
USAGE
  $ create-padma plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
