var inspect = require('eyespect').inspector();
var running = require('../index');
var should = require('should');
var assert = require('assert');

var path = require('path');
var fork = require('child_process').fork;
describe('Check if process with given pid is running', function () {
  it('should return true is process is running', function (done) {
    var childScriptPath = path.join(__dirname, 'child.js');
    var child = fork(childScriptPath);
    var pid = child.pid;
    running(pid, function (err, found) {
      should.not.exist(err);
      assert.ok(found, 'pid is not running when it should be');
      done();
    });
  });


  it('should return true is process is not running', function (done) {
    var pid = 20934829;
    running(pid, function (err, found) {
      should.not.exist(err);
      assert.ok(!found, 'pid is running when it should not be');
      done();
    });
  });
});
