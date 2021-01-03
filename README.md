# mhk-plop

## Getting Start ( need two package )

```
1. yarn add mhk-plop -D
2. yarn add plop -D
```

## Setup for plop code generate

1. Create a plopfile.js file in the project root dir.
2. Add the following code to the plopfile.js file.

```js
  module.exports = require('mhk-plop')
```

3. Add the following code to the scripts tag of package.json

```js
"generate": "plop"
```

## Usage

```
yarn generate
```