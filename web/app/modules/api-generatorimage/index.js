'use strict';

const internals = {
};

exports.register = function (server, options, next) {
    // var config = server.configManager;
    let queue = server.plugins['hapi-kue'];
    let image = require('./util/image')(server, options);

    server.expose('generatorImage', image.generatorImage);

    queue.processJob('api-generatorimage', function (job, done) {
        console.log('receive message');
        console.log(job.data);
        let configData = job.data;
        image.generatorImage(configData);
        done();
    });

    next();
};

exports.register.attributes = {
    name: 'api-generatorimage'
};
