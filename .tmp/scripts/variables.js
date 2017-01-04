/***************************************************
Description: Site configs
****************************************************/
var settingJs = (function(){
	'use strict';

	var host = window.location.host,
	configs = {};

	switch(host){
		case 'live':
			configs.appPrefix = 'bzSkeLive';
			configs.baseUrl = 'http://live.com/';
		break;
		default:
			configs.appPrefix = 'bzSkeLocal';
			configs.baseUrl = 'http://localhost:9999/';
		break;
	}

	return {
		appPrefix: configs.appPrefix,
		baseUrl: configs.baseUrl
	}
})();