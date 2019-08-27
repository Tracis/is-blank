isBlank
=============

[![Build Status](https://travis-ci.org/Tracis/is-blank.svg?branch=master)](https://travis-ci.org/Tracis/is-blank)
[![Coverage Status](https://coveralls.io/repos/github/Tracis/is-blank/badge.svg?branch=master)](https://coveralls.io/github/Tracis/is-blank?branch=master)
[![starts Status](https://img.shields.io/github/stars/Tracis/is-blank)](https://github.com/Tracis/is-blank)
[![npm](https://img.shields.io/npm/dm/@sedan-utils/is-blank.svg?maxAge=2592000)](https://www.npmjs.com/package/@sedan-utils/is-blank)

isBlank is a package like Ruby [blank?](https://apidock.com/rails/Object/blank%3F).

## Installation

```sh
npm i -S @sedan-utils/is-blank
```

## Usage

```js
import isBlank from '@sedan-utils/is-blank'

// true
isBlank([])
isBlank({})
isBlank(null)
isBlank(undefined)
isBlank(false)
isBlank('')
isBlank('    ')
isBlank('\n\t\r')
isBlank(function () {})


// false
isBlank(0)
isBlank(100)
isBlank(true)
isBlank(function (a) {})
```
