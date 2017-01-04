'use strict';

let config = {};

config.web = {
    facebook: {
        clientID: process.env.FACEBOOK_ID || '1141003195935953',
        clientSecret: process.env.FACEBOOK_SECRET || 'a4904e297cbcfbe55cda92404e9ff1c7',
        callbackURL: '/auth/facebook/callback',
        version: 'v2.5',
        permissions: 'email',
        cookie: true,
        xfbml: true,
        language: 'vi_VN',
    },
    twitter: {
        clientID: process.env.TWITTER_KEY || 'yXwFK6ff3fOc8dvessqKvd9Z8',
        clientSecret: process.env.TWITTER_SECRET || 'k0w9heOObYwlwchdRBQ6tmHiPQN5O26nwz5XDzxPWPtby6llNx',
        callbackURL: '/auth/twitter/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID || '941481178075-mrmusgvq3asuq1relija3smn7psmogkh.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_SECRET || 'sSIpuxYkac8r8LgXtVJ9pM6W',
        callbackURL: '/auth/google/callback'
    },
    
    port: process.env.FRONT_PORT || 9007,
    sessionKey: '6ketaq3cgrggdfgdfgdfgdfgo315rk9',
    cookieOptions: {
        ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
        encoding: 'none',    // we already used JWT to encode
        path: '/',
        //isSecure: true,      // warm & fuzzy feelings
        isHttpOnly: false,    // prevent client alteration
        clearInvalid: true, // remove invalid cookies
        strictHeader: true   // don't allow violations of RFC 6265
    },
    paging: {
        defaultPageSize: 25,
        numberVisiblePages: 10,
        itemsPerPage: 20
    },
    db: {
        uri: 'mongodb://localhost/db_pediasure',
        options: {
            user: '',
            pass: ''
        }
    },
    mailer: {
        options: {
            pool: true,
            service: 'Gmail',
            auth: {
                user: 'chung.gkh@gmail.com',
                pass: 'iii3studi1'
            },
            logger: false, // log to console
            debug: false // include SMTP traffic in the logs
        },
        defaults: {
            from: 'info <sender@gmail.com>'
        }
    },
    email: {
        from: {
            "name": "info",
            "address": "chung.gkh@gmail.com"
        },
        to: [{ //for admin
            "name": "admin",
            "address": "chung.gkh@gmail.com"
        }],
        cc: [],
        bcc: []

    },
    log: {
        options: {
            transport: 'console',
            logFilePath: BASE_PATH + '/var/bunyan-log.log'
        }
    },
    redisOptions: {
        host: '127.0.0.1',
        port: 6379,
        detect_buffers: true
    },
    upload: {
        path: process.cwd() + '/public/files',
        bannerPath: process.cwd() + '/public/files/banner/',
        postPath: process.cwd() + '/public/files/post/',
        productPath: process.cwd() + '/public/files/product/'
    },
    connections: [
        {
            port: process.env.CMS_WEB_PORT || 9007,
            labels: ['web'],
            routes: {
                cors: {
                    origin: ['*'],
                    credentials: true
                }
            },
            router: {
                stripTrailingSlash: false
            }
        },
        {
            port: process.env.CMS_ADMIN_PORT || 9002,
            labels: ['admin'],
            routes: {
                cors: {
                    origin: ['*'],
                    credentials: true
                },
                auth: {
                    scope: ['admin']
                }
            }
        },
        {
            port: process.env.CMS_API_PORT || 9003,
            labels: 'api',
            routes: {
                cors: {
                    origin: ['*'],
                    credentials: true
                }
            }
        }
    ],
    jwt: {
        secret: process.env.JWT_SECRET_CMS || 'jKErFlFEktfafasfaKLfghLoPrlafasflsdf0werr'
    },

    error: {
        notfound: {
            url: '/error404' //404 URL
        },
        user: {
            login: '/login' // Login URL
        }
    },
    
    context: {
        app: {
            title: 'Web',
            description: '',
            keywords: ''
        },
        settings: {
            services: {
                userApi: 'http://localhost:9003',
                contactApi: 'http://localhost:9003',
                socketApi: 'http://localhost:9003',
                uploadApi: 'http://localhost:9003',
                webUrl: 'http://localhost:9007'
            },
            prefix: 'bzPediaSure'
        }
    }

};

module.exports = config;