Test if a process with a given pid is running

[![Build Status](https://travis-ci.org/nisaacson/is-running.png)](https://travis-ci.org/nisaacson/is-running)
[![Dependency Status](https://david-dm.org/nisaacson/is-running/status.png)](https://david-dm.org/nisaacson/is-running)
Dependency tracking by [David](https://david-dm.org/)

# Installation
`npm install is-running`

## Usage

Asyncronously
```javascript
var inspect = require('eyespect').inspector()
var running = require('is-running')
var pid = 897245
running(pid, function(err, live) {
  if (err) {
    inspect(err, 'error testing if process is running')
    return
  }
  inspect(live, 'is process running?')
})
```
Syncronously
```javascript
var inspect = require('eyespect').inspector()
var running = require('is-running')
var pid = 897245
var live = running(pid)
inspect(live, 'is process running?')
})
```
you will need to install eyespect to run the above example
`npm install eyespect`

### Test
To run the test suite execute
`npm test`
