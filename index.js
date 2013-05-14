var exec = require('child_process').exec
var tryKill
module.exports = function (pid, cb) {
  var err = null,
      result = null
  if (typeof pid !== 'number') {
    err = "you must pass a pid as the first argument"
  }
  else {
    result = tryKill(pid)
  }
  if (cb) {
    return cb(err, result )
  }
  if (err) {
    return err
  }
  return result
}

tryKill = function(pid) {
  var result
  try {
    result = process.kill(pid,0)
    return result
  }
  catch (e) {
    return e.code === 'EPERM';
  }
}
