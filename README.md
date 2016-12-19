# eslint-config-topcoder

[![Build Status](https://travis-ci.org/lsentkiewicz/eslint-config-topcoder.svg?branch=master)](https://travis-ci.org/lsentkiewicz/eslint-config-topcoder)

This package contains ESLint configs for applications:
- nodejs v7 (backend application)
- nodejs v7 with babel (backend application written in babel)
- react

It contains plugins:
- [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) - ESLint rules for babel
- [eslint-plugin-babel](https://github.com/yannickcr/eslint-plugin-react) - ESLint rules for react
- [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash) - ESLint rules for lodash (`underscore` is forbidden)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports

## Installation

### Nodejs

```
npm install --save-dev eslint-config-topcoder
```

Configure `.eslintrc`

```
{
  "extends": "eslint-config-topcoder/nodejs"
}
```

### Nodejs + babel

```
npm install --save-dev eslint-config-topcoder eslint-plugin-babel@^4.0.0
```

Configure `.eslintrc`

```
{
  "extends": "eslint-config-topcoder/nodejs-babel"
}
```

### React

```
npm install --save-dev eslint-config-topcoder eslint-plugin-babel@^4.0.0 eslint-plugin-react@^6.8.0
```

Configure `.eslintrc`

```
{
  "extends": "eslint-config-topcoder/react"
}
```


### Add scripts to package.json

```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "npm run lint -- --fix"
}
```

Run scripts with `-s` flag  
```
  npm run lint -s
  npm run lint:fix -s
```


## General notes
1. It's not allowed to disable rules. The purpose of this config is to keep consistent styles in all topcoder projects.  
However some exception are allowed.  

1. You can disable rules in configuration/setup files.
Example:

```js

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.json({
    error: err.message
  });
});

```
ExpressJS requires to create a function with 4 parameters for error handling, but it may happen that we don't use some parameters.

Following example is not allowed.
```js
io.on('connection', (socket) => { // eslint-disable-line no-unused-vars
  winston.info('socket connection established');
});
```
`socket` can be removed


1. `magic-numbers`
Following magic numbers are allowed: `-1`, `0`, `1`.  
In some cases you can disable this rule:
a) Math computations
```js
const avg = (foo + bar) / 2; // eslint-disable-line magic-numbers
```

b) Unit tests
Unit tests usually contain hard-coded data, and `magic-numbers` can be problematic.

1. In following cases it's not allowed to disable magic-numbers

a)
bad
```js
res.status(400);
res.json({error: 'some validation error'});
```

good
```js
import HttpStatus from 'http-status';

res.status(HttpStatus.BAD_REQUEST);
res.json({error: 'some validation error'});
```

b)
bad
```js
if (foo.status === 1) {

}
```

good
```js
const ACTIVE_STATUS = 1;

if (foo.status === ACTIVE_STATUS) {

}
```

1. You should disable only using inline commands:

bad (all rules are disabled)
```
// eslint-disable-line
```

good (only 1 rule is disabled)
```
// eslint-disable-line magic-numbers
```


## License
MIT
