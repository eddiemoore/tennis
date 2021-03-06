# Tennis Scoring

[![codecov](https://img.shields.io/codecov/c/github/eddiemoore/tennis.svg?style=flat-square)](https://codecov.io/gh/eddiemoore/tennis)
[![Build Status](https://img.shields.io/travis/eddiemoore/tennis/master.svg?style=flat-square)](https://travis-ci.org/eddiemoore/tennis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![dependencies](https://img.shields.io/david/eddiemoore/tennis.svg?style=flat-square)](https://david-dm.org/eddiemoore/tennis)
[![dev dependencies](https://img.shields.io/david/dev/eddiemoore/tennis.svg?style=flat-square)](https://david-dm.org/eddiemoore/tennis?type=dev)

Tennis scoring system written in TypeScript.

Handles 1 set with tie breaker.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need node version `8` or higher

Clone the repository

```bash
$ git clone https://github.com/eddiemoore/json-search.git
$ cd json-search
```

Install dependencies

```bash
$ npm install
```

## Example usage

```js
const match = Match('player 1', 'player 2')
match.pointWonBy('player 1')
match.pointWonBy('player 2')
// this will return "0-0, 15-15"
match.score()

match.pointWonBy('player 1')
match.pointWonBy('player 1')
// this will return "0-0, 40-15"
match.score()

match.pointWonBy('player 2')
match.pointWonBy('player 2')
// this will return "0-0, Deuce"
match.score()

match.pointWonBy('player 1')
// this will return "0-0, Advantage player 1"
match.score()

match.pointWonBy('player 1')
// this will return "1-0"
match.score()
```

## Running Tests

```bash
$ npm test
```

## Licence

The MIT License (MIT)
