# CLI Pfalfa

Pfalfa CLI Tool

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-pfalfa.svg)](https://npmjs.org/package/cli-pfalfa)
[![Downloads/week](https://img.shields.io/npm/dw/pfalfa-cli-tool.svg)](https://npmjs.org/package/pfalfa-cli-tool)
[![License](https://img.shields.io/npm/l/pfalfa-cli-tool.svg)](https://github.com/adisetiawan/pfalfa/cli-tool/blob/master/package.json)

<!-- toc -->
* [CLI Pfalfa](#cli-pfalfa)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g cli-pfalfa
$ pfalfa COMMAND
running command...
$ pfalfa (-v|--version|version)
cli-pfalfa/0.1.0 darwin-x64 node-v12.12.0
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
* [`pfalfa profile`](#pfalfa-profile)
* [`pfalfa status`](#pfalfa-status)

## `pfalfa create`

create DApps in Pfalfa Community

```
USAGE
  $ pfalfa create

OPTIONS
  -c, --category=category        category dApp (High-Rish,Game,Gambling,Exchange,Finance,Social,Art,Tools,Others)
  -d, --description=description  description dApp
  -l, --logoUrl=logoUrl          logo dApp
  -n, --name=name                DApps name (required)
```

_See code: [src/commands/create.js](https://gitlab.com/pfalfa-blockchain/cli-pfalfa/blob/v0.1.0/src/commands/create.js)_

## `pfalfa deploy`

deploy DApp to Pfalfa IPFS Gateway

```
USAGE
  $ pfalfa deploy

OPTIONS
  -f, --file=file  full path of zip file (required)
  -n, --name=name  dApps name (required)
```

_See code: [src/commands/deploy.js](https://gitlab.com/pfalfa-blockchain/cli-pfalfa/blob/v0.1.0/src/commands/deploy.js)_

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

_See code: [src/commands/list.js](https://gitlab.com/pfalfa-blockchain/cli-pfalfa/blob/v0.1.0/src/commands/list.js)_

## `pfalfa login`

login to Pfalfa Identity Hub

```
USAGE
  $ pfalfa login

OPTIONS
  -e, --email=email          developer email (required)
  -p, --passphare=passphare  developer passphare/password (required)
```

_See code: [src/commands/login.js](https://gitlab.com/pfalfa-blockchain/cli-pfalfa/blob/v0.1.0/src/commands/login.js)_

## `pfalfa profile`

get Pfalfa Identity Hub Profile

```
USAGE
  $ pfalfa profile
```

_See code: [src/commands/profile.js](https://gitlab.com/pfalfa-blockchain/cli-pfalfa/blob/v0.1.0/src/commands/profile.js)_

## `pfalfa status`

status DApps in Pfalfa Community

```
USAGE
  $ pfalfa status

OPTIONS
  -n, --name=name  DApps name (required)
```

_See code: [src/commands/status.js](https://gitlab.com/pfalfa-blockchain/cli-pfalfa/blob/v0.1.0/src/commands/status.js)_
<!-- commandsstop -->
