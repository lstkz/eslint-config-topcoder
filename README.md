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
   Following example is not allowed, because `socket` can be removed.
   ```js
io.on('connection', (socket) => { // eslint-disable-line no-unused-vars
  winston.info('socket connection established');
});
```
1. `magic-numbers`
   Following magic numbers are allowed: `-1`, `0`, `1`.  
   In some cases you can disable this rule:  
  * Math computations  
     ```js
const avg = (foo + bar) / 2; // eslint-disable-line magic-numbers
     ```
  * Unit tests  
     Unit tests usually contain hard-coded data, and `magic-numbers` can be problematic.  
     
  * In following cases it's not allowed to disable magic-numbers  
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
