'use strict'



exports.register = function (server, options, next) {

    var configManager = server.configManager;
    let redis = server.redis;

    var session = function(){
        init()

    }



    return next();
}
exports.register.attributes = {
    name: 'app-session-redis',
    dependencies: 'app-redis'
};
