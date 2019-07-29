isBlank
=============

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
isBlank('')
isBlank('    ')


// false
isBlank(0)
isBlank(false)
```
