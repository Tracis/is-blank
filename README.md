isBlank
=============

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
