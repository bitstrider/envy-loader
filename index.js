var dotenv = require('dotenv')

module.exports = function(content) {
    var buf = new Buffer(content);
    return dotenv.parse(buf);
};
