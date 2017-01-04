(function(){
	angular.module('appBz')
	.controller('homeCtrl', homeCtrl);

	function homeCtrl($rootScope, $scope, $location, $facebook){
		var home = this;

		home.formData = {
			name: '',
			day: '',
			month: '',
			year: ''
		}

		home.submit = submit;

		function submit(){
			if(validForm()){
				$facebook.login()
				.then(function(resp){
					console.log('Đăng nhập facebook thành công!', resp);

				}, function(){
					console.log('Hủy đăng nhập facebook.');

				});
			} else{
				console.log('Invalid.');
			}
			
		}

		function validForm(){
			if(home.formData.year < 2005 || home.formData.year > 2015)
				return false;
			if(home.formData.day <= 0 || home.formData.month <= 0)
				return false;
			if(home.formData.day > 31 || home.formData.month > 12)
				return false;
			return true;
		}

	}
})();