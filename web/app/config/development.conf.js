'use strict';

let config = {};

config.web = {
    
    assets: {
        js: [
            // 'public/assets/lib/jquery/dist/jquery.min.js',
            // 'public/assets/lib/bootstrap/dist/js/bootstrap.min.js',
            'public/assets/lib/socket.io-client/socket.io.js',
            'public/assets/lib/angular/angular.min.js',
            'public/assets/lib/angular-bzfacebook/angular-bzfacebook.js',
            'public/assets/lib/angular-cookies/angular-cookies.min.js',
            'public/assets/js/app.js',
            'public/assets/frontend/scripts/vendor.js',
            // 'public/assets/frontend/scripts/languages.js',
            // 'public/assets/frontend/scripts/variables.js',
            'public/assets/frontend/scripts/main.js',

            'app/modules/web-*/view/client/js/*.js',
        ],
        css: [
            'public/assets/frontend/styles/vendor.css',
            'public/assets/frontend/styles/main.css',
            'public/assets/css/styles.css',
        ]
    },
    adminassets: {
        css: [
            'public/assets/lib/AdminLTE/bootstrap/css/bootstrap.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css',
            'public/assets/lib/AdminLTE/plugins/datatables/dataTables.bootstrap.css',
            'public/assets/lib/AdminLTE/dist/css/skins/skin-blue.min.css',
            'public/assets/lib/AdminLTE/plugins/select2/select2.min.css',
            'public/assets/lib/AdminLTE/dist/css/AdminLTE.min.css',
            'app/modules/admin-*/view/client/style/*.css',
        ],
        js: [
            'https://cdn.ckeditor.com/4.4.3/standard/ckeditor.js',
            'public/assets/lib/jquery/dist/jquery.min.js',
            'public/assets/lib/bootstrap/dist/js/bootstrap.min.js',
            'public/assets/lib/AdminLTE/dist/js/app.min.js',
            'public/assets/lib/angular/angular.js',
            'public/assets/lib/angular-resource/angular-resource.js',
            'public/assets/lib/angular-animate/angular-animate.js',
            'public/assets/lib/angular-ui-router/release/angular-ui-router.js',
            'public/assets/lib/angular-ui-utils/index.js',
            'public/assets/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            'public/assets/lib/angular-file-upload/dist/angular-file-upload.min.js',
            'public/assets/lib/angular-sanitize/angular-sanitize.min.js',
            'public/assets/lib/ui-select/dist/select.js',
            'public/assets/lib/AdminLTE/plugins/select2/select2.min.js',
            'public/assets/lib/angular-messages/angular-messages.min.js',
            'public/assets/lib/angular-input-masks/angular-input-masks-standalone.min.js',
            'public/assets/lib/bootstrap-ui-datetime-picker/dist/datetime-picker.min.js',
            'app/modules/admin-core/view/client/js/app.js',
            'app/modules/admin-core/view/client/js/config.js',
            'app/modules/admin-core/view/client/js/service.js',
            'app/modules/admin-*/view/client/js/*.js',
        ]
    },
};

module.exports = config;
