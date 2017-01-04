'use strict';

const AuthController = require('./controller/auth.controller.js');

exports.register = function (server, options, next) {

   
    var Auth = require('./util/auth');
    server.expose('auth', new Auth(server) );
    
    var Facebook = require('./util/facebook');
    server.expose('facebook', new Facebook(server) );
    
    server.route({
        method: ['GET'],
        path: '/api/user',
        config: AuthController.index,
    });
    server.route({
        method: 'POST',
        path: '/api/user/login',
        config: AuthController.login,
    });
    server.route({
        method: ['GET'],
        path: '/api/user/logout',
        config: AuthController.logout,
    });
    server.route({
        method: ['POST'],
        path: '/api/user/register',
        config: AuthController.register,
    });
    server.route({
        method: ['POST'],
        path: '/api/user/active',
        config: AuthController.active,
    });

    server.route({
        method: ['POST'],
        path: '/api/user/forgot',
        config: AuthController.forgot,
    });

    server.route({
        method: 'POST',
        path: '/api/user/reset',
        config: AuthController.reset, 
    });

    server.route({
        method: 'POST',
        path: '/api/user/verify/email',
        config: AuthController.verifyemail, 
    });

    server.route({
        method: ['GET'],
        path: '/api/user/profile/{id}',
        config: AuthController.profile,
        
    });
    server.route({
        method: ['GET'],
        path: '/api/user/account',
        config: AuthController.account,
        
    });

    server.route({
        method: ['POST'],
        path: '/api/user/changepassword',
        config: AuthController.changepassword
        
    });
    server.route({
        method: 'POST',
        path: '/api/user/facebook-login',
        config: AuthController.facebookLogin
    });
    server.route({
        method: 'POST',
        path: '/api/user/google-login',
        config: AuthController.googleLogin
    });
    server.route({
        method: 'POST',
        path: '/api/user/updateprofile',
        config: AuthController.update,
        
    });
    server.route({
        method: 'POST',
        path: '/api/user/uploadavatar',
        config: AuthController.uploadavatar,
        
    });
    return next();
};

exports.register.attributes = {
    name: 'api-user'
};
