const tap = require('tap')
const fs = require('fs')
const envyLoader = require('../index.js')

tap.test("load basic.env", function (t) {

    const content = fs.readFileSync('test/fixtures/basic.env').toString();

    const module = envyLoader(content)
    const env = eval(module)

    t.type(env,'object')
    t.equal(env.FOO,'hello')
    t.equal(env.BAR_BAZ,'world')
    t.equal(env.RAZ,'0')
    t.equal(env['TAZ'],'1')

    t.end();

})
