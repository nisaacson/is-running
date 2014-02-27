var inspect = require('eyespect').inspector()
var running = require('../index')
var should = require('should')
var assert = require('assert')
var path = require('path')
var fork = require('child_process').fork
describe('Check if process with given pid is running', function () {
  it('using callback should return true as second parameter when process is running', function (done) {
    var childScriptPath = path.join(__dirname, 'dummyChild.js')
    var child = fork(childScriptPath)
    var pid = child.pid
    running(pid, function (err, found) {
      // cleanup
      child.kill()
      should.not.exist(err)
      assert.ok(found, 'pid is not running when it should be')
      done()
    })
  })

  it('using callback should return false as second parameter when process is not running', function (done) {
    // there could be a better way to get a non-running process besides a really big number
    var pid = 20932842309847
    running(pid, function (err, found) {
      should.not.exist(err)
      assert.ok(!found, 'pid is running when it should not be')
      done()
    })
  })

  it('syncronous should return true when process is running', function () {
    var childScriptPath = path.join(__dirname, 'dummyChild.js')
    var child = fork(childScriptPath)
    var pid = child.pid
    var found = running(pid)
    // cleanup
    child.kill()
    assert.ok(found, 'pid is not running when it should be')
  })

  it('syncronous should return false when process is not running', function (done) {
    // there could be a better way to get a non-running process besides a really big number
    var pid = 20932842309847
    var found = running(pid)
    assert.ok(!found, 'pid is running when it should not be')
    done()
  })
})
