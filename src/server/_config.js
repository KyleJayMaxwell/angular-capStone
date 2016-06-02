
var config = {};

config.mongoURI = {
    test: 'mongodb://localhost/kyle_test',
    development: 'mongodb://localhost/kyle_test',
    production: process.env.MONGODB_URI
};

module.exports = config;