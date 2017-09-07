const path = require('path')
const fs = require('fs')
const css = require('../lib/css')
const assert = require('assert')

describe('css parser', function () {
  it('可以的到定位信息', function () {
    assert.deepEqual(
      css(
        fs.readFileSync(
          path.join(__dirname, './source/pos.css'),
          'utf-8'
        )
      ),
      require('./expect/pos.json')
    )
  })
})