'use strict'
var kue = require('kue-scheduler');


exports.register = function (server, options, next) {

    const config = server.configManager;
    var KueScheduler = kue.createQueue({prefix: 'q'});
    server.decorate('server', 'KueScheduler', KueScheduler);
    server.decorate('request', 'KueScheduler', KueScheduler);
    server.expose('KueScheduler', KueScheduler);
    
    next();

}
exports.register.attributes = {
    name: 'hapi-kuescheduler'
};
