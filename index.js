var exec = require('child_process').exec;
var inspect = require('eyespect').inspector();
module.exports = function (pid, cb) {
  if (!cb) {
    cb = pid;
    return cb('you must pass a pid as the first argument');
  }

  var cmd = 'kill -0 ' + pid;
  var child = exec('kill', ['-0', pid], function(err, stdout, stderr) {
    if (err) {
      return cb(err);
    }
    inspect(stdout, 'stdout');
    inspect(stderr, 'stderr');
  });
};
