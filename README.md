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
$ npm install -g pfalfa
$ pfalfa COMMAND
running command...
$ pfalfa (-v|--version|version)
pfalfa/0.1.11 darwin-x64 node-v13.8.0
$ pfalfa --help [COMMAND]
USAGE
  $ pfalfa COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`pfalfa create`](#pfalfa-create)
* [`pfalfa deploy`](#pfalfa-deploy)
* [`pfalfa help [COMMAND]`](#pfalfa-help-command)
* [`pfalfa list`](#pfalfa-list)
* [`pfalfa login`](#pfalfa-login)
* [`pfalfa logout`](#pfalfa-logout)
* [`pfalfa profile`](#pfalfa-profile)
* [`pfalfa status`](#pfalfa-status)

## `pfalfa create`

create DApps in Pfalfa Community

```
USAGE
  $ pfalfa create

OPTIONS
  -c, --category=category        category DApp (High-Rish,Game,Gambling,Exchange,Finance,Social,Art,Tools,Others)
  -d, --description=description  description DApp
  -l, --logoUrl=logoUrl          logo DApp
  -n, --name=name                DApps name (required)
```

_See code: [src/commands/create.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.11/src/commands/create.js)_

## `pfalfa deploy`

deploy DApp to Pfalfa IPFS Gateway

```
USAGE
  $ pfalfa deploy

OPTIONS
  -f, --file=file  full path of zip file (required)
  -n, --name=name  dApps name (required)
```

_See code: [src/commands/deploy.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.11/src/commands/deploy.js)_

## `pfalfa help [COMMAND]`

display help for pfalfa

```
USAGE
  $ pfalfa help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `pfalfa list`

list existing DApps

```
USAGE
  $ pfalfa list
```

_See code: [src/commands/list.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.11/src/commands/list.js)_

## `pfalfa login`

login to Pfalfa Identity Hub

```
USAGE
  $ pfalfa login

OPTIONS
  -e, --email=email          developer email (required)
  -p, --passphare=passphare  developer passphare/password (required)
```

_See code: [src/commands/login.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.11/src/commands/login.js)_

## `pfalfa logout`

logout from Pfalfa Identity Hub

```
USAGE
  $ pfalfa logout
```

_See code: [src/commands/logout.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.11/src/commands/logout.js)_

## `pfalfa profile`

get Pfalfa Identity Hub Profile

```
USAGE
  $ pfalfa profile
```

_See code: [src/commands/profile.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.11/src/commands/profile.js)_

## `pfalfa status`

status DApps in Pfalfa Community

```
USAGE
  $ pfalfa status

OPTIONS
  -n, --name=name  DApps name (required)
```

_See code: [src/commands/status.js](https://github.com/eksant/cli-pfalfa/blob/v0.1.11/src/commands/status.js)_
<!-- commandsstop -->
