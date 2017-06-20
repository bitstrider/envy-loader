const dotenv = require('dotenv')

module.exports = function(content) {
    const buf = new Buffer(content);
    const env = dotenv.parse(buf);
    const value = JSON.stringify(env);
    const module = `module.exports = ${value};`;
    return module;
};
