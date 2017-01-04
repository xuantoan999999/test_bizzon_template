var mongoose = require('mongoose'),
User = mongoose.model('User'),
Promise = require('bluebird'),
crypto = require('crypto'),
bcrypt = Promise.promisifyAll(require('bcrypt'));

const SALT_LENGTH = 9;

class Facebook {
    constructor(server) {
        this.server = server;
        this.redisClient = server.redis;
        this.configManager = server.configManager;
    }
    hashPassword(password) {
        return bcrypt.hashAsync(password, SALT_LENGTH);
    }
    getRandomString(length = 20) {
        return crypto.randomBytes(length).toString('hex');
    }
    loginFacebook(user){
        var data = user;
        let promise = User.findOne({ facebookId: user.facebookId }).exec();
        promise.then(user => {
            if (!user) {
                this.saveUser(data);
            }
            console.log(user);
        }).catch(err => {
            return reply(Boom.badRequest(ErrorHandler.getErrorMessage(err)));
        });
    }
    saveUser(data){
        let password = this.createPassword();
        console.log(password);
        let user = new User(data);
        this.hashPassword(password).then(hash => {
            user.password = hash;
            const token = this.getRandomString(20);
            user.activeToken = token;
            const promise = user.save();
            console.log('save user');
            return promise;
            // }).then(user => {
            //     return user;
            // }).then(user => {
            //     user = user.toObject();
            //     return user;
        }).catch(err => {
            return Promise.resolve(err);
            // console.log(err);
        });
    }
    createPassword(){
        let password = this.configManager.get('web.context.settings.prefix');
        password += 'jKErFlFEk';
        return password;
    }

}

module.exports = Facebook;

