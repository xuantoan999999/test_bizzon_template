(function(){
	'use strict';
	angular.module('appBz', ['ngCookies', 'ngFacebook'])
	.config(config)
	.run(run);

	function config($httpProvider, $facebookProvider){
		console.log('config');
		$httpProvider.defaults.withCredentials = true;

		$facebookProvider.setAppId(facebookConfig.appId);
		$facebookProvider.setPermissions(facebookConfig.permissions);
		$facebookProvider.setVersion(facebookConfig.version);
		$facebookProvider.setCookie(facebookConfig.cookie);
		$facebookProvider.setXfbml(facebookConfig.xfbml);
		$facebookProvider.redirect(facebookConfig.callbackURL);

        $httpProvider.defaults.headers.post['Content-Type'] = 'text/plain; charset=UTF-8';
	}

	function run($rootScope, $http, $window, $facebook){
		
	}

	angular.element(document).ready(function() {
		angular.bootstrap(document, ['appBz']);
	});
})();