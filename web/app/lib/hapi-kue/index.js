'use strict'
var kue = require('kue-scheduler')
    , queue = kue.createQueue({prefix: 'q'});

let internals = {};

exports.register = function (server, options, next) {

    const config = server.configManager;
    server.decorate('server', 'kue', queue);
    server.decorate('request', 'kue', queue);
    server.expose('queue', queue);

    server.expose('createJob', internals.createJob);
    server.expose('processJob', internals.processJob);

    next();

}
exports.register.attributes = {
    name: 'hapi-kue'
};


internals.createJob = function (jobName, data, callback) {
    var job = queue.create(jobName, data).save(callback);
    return job;
}

internals.processJob = function (jobName, callback) {
    queue.process(jobName, callback);
}
