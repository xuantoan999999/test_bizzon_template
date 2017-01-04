'use strict';

const UploadController = require('./controller/upload.controller.js');

exports.register = function (server, options, next) {
    
    var upload = require('./util/upload')(server);
    server.expose(upload);

    server.route({
        method: 'GET',
        path: '/api/upload',

        config: UploadController.index
    });
    server.route({
        method: 'POST',
        path: '/api/upload/image',
        config: UploadController.uploadImage
    });

    next();
};

exports.register.attributes = {
    name: 'api-upload'
};
