# CLI Pfalfa

Pfalfa CLI Tool

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![Downloads][downloads]][downloads-url]

[npm]: https://img.shields.io/npm/v/cli-pfalfa.svg
[npm-url]: https://www.npmjs.com/package/cli-pfalfa
[build-status]: https://circleci.com/gh/eksant/cli-pfalfa.svg?style=shield
[build-status-url]: https://circleci.com/gh/eksant/cli-pfalfa
[downloads]: https://img.shields.io/npm/dw/cli-pfalfa.svg
[downloads-url]: https://www.npmjs.com/package/cli-pfalfa

<!-- toc -->
* [CLI Pfalfa](#cli-pfalfa)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g cli-pfalfa
$ cli-pfalfa COMMAND
running command...
$ cli-pfalfa (-v|--version|version)
cli-pfalfa/0.1.6 darwin-x64 node-v12.12.0
$ cli-pfalfa --help [COMMAND]
USAGE
  $ cli-pfalfa COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`cli-pfalfa create`](#cli-pfalfa-create)
* [`cli-pfalfa deploy`](#cli-pfalfa-deploy)
* [`cli-pfalfa help [COMMAND]`](#cli-pfalfa-help-command)
* [`cli-pfalfa list`](#cli-pfalfa-list)
* [`cli-pfalfa login`](#cli-pfalfa-login)
* [`cli-pfalfa profile`](#cli-pfalfa-profile)
* [`cli-pfalfa status`](#cli-pfalfa-status)

## `cli-pfalfa create`

create DApps in Pfalfa Community

```
USAGE
  $ cli-pfalfa create

OPTIONS
  -c, --category=category        category DApp (High-Rish,Game,Gambling,Exchange,Finance,Social,Art,Tools,Others)
  -d, --description=description  description DApp
  -l, --logoUrl=logoUrl          logo DApp
  -n, --name=name                DApps name (required)
```

_See code: [src/commands/create.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.6/src/commands/create.js)_

## `cli-pfalfa deploy`

deploy DApp to Pfalfa IPFS Gateway

```
USAGE
  $ cli-pfalfa deploy

OPTIONS
  -f, --file=file  full path of zip file (required)
  -n, --name=name  dApps name (required)
```

_See code: [src/commands/deploy.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.6/src/commands/deploy.js)_

## `cli-pfalfa help [COMMAND]`

display help for cli-pfalfa

```
USAGE
  $ cli-pfalfa help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `cli-pfalfa list`

list existing DApps

```
USAGE
  $ cli-pfalfa list
```

_See code: [src/commands/list.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.6/src/commands/list.js)_

## `cli-pfalfa login`

login to Pfalfa Identity Hub

```
USAGE
  $ cli-pfalfa login

OPTIONS
  -e, --email=email          developer email (required)
  -p, --passphare=passphare  developer passphare/password (required)
```

_See code: [src/commands/login.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.6/src/commands/login.js)_

## `cli-pfalfa profile`

get Pfalfa Identity Hub Profile

```
USAGE
  $ cli-pfalfa profile
```

_See code: [src/commands/profile.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.6/src/commands/profile.js)_

## `cli-pfalfa status`

status DApps in Pfalfa Community

```
USAGE
  $ cli-pfalfa status

OPTIONS
  -n, --name=name  DApps name (required)
```

_See code: [src/commands/status.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.6/src/commands/status.js)_
<!-- commandsstop -->
