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

- [CLI Pfalfa](#cli-pfalfa)
- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g cli-pfalfa
# install cli pfalfa in global

$ pfalfa [COMMAND]
# running command...

$ pfalfa (-v|--version|version)
# cli-pfalfa/0.1.1 darwin-x64 node-v12.12.0

$ cli-pfalfa --help [COMMAND]
# USAGE
    $ pfalfa COMMAND
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`cli-pfalfa create`](#cli-pfalfa-create)
- [`cli-pfalfa deploy`](#cli-pfalfa-deploy)
- [`cli-pfalfa help [COMMAND]`](#cli-pfalfa-help-command)
- [`cli-pfalfa list`](#cli-pfalfa-list)
- [`cli-pfalfa login`](#cli-pfalfa-login)
- [`cli-pfalfa profile`](#cli-pfalfa-profile)
- [`cli-pfalfa status`](#cli-pfalfa-status)

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

## `cli-pfalfa deploy`

deploy DApp to Pfalfa IPFS Gateway

```
USAGE
  $ cli-pfalfa deploy

OPTIONS
  -f, --file=file  full path of zip file (required)
  -n, --name=name  dApps name (required)
```

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

## `cli-pfalfa list`

list existing DApps

```
USAGE
  $ cli-pfalfa list
```

## `cli-pfalfa login`

login to Pfalfa Identity Hub

```
USAGE
  $ cli-pfalfa login

OPTIONS
  -e, --email=email          developer email (required)
  -p, --passphare=passphare  developer passphare/password (required)
```

## `cli-pfalfa profile`

get Pfalfa Identity Hub Profile

```
USAGE
  $ cli-pfalfa profile
```

## `cli-pfalfa status`

status DApps in Pfalfa Community

```
USAGE
  $ cli-pfalfa status

OPTIONS
  -n, --name=name  DApps name (required)
```

<!-- commandsstop -->
