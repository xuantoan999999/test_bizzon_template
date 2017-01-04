<!-- build:js(.) scripts/vendor.js -->
<!-- bower:js -->
<script src="/bower_components/jquery/dist/jquery.js"></script>
<script src="/bower_components/gsap/src/uncompressed/TweenMax.js"></script>
<script src="/bower_components/jrespond/jRespond.js"></script>
<script src="/bower_components/magnific-popup/dist/jquery.magnific-popup.js"></script>
<script src="/bower_components/is_js/is.js"></script>
<script src="/bower_components/bootstrap/dist/js/bootstrap.js"></script>
<!-- endbower -->
<!-- endbuild -->
<script src="scripts/languages.js"></script>
<script src="scripts/variables.js"></script>
<!-- build:js({app,.tmp}) scripts/main.js -->
<!-- Libs -->
<script src="scripts/utils/storage.js"></script>
<script src="scripts/main.js"></script>
<!-- Modules -->
<script src="modules/home/script.js"></script>
<!-- endbuild -->
<!-- GA Tracking Code
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	for (var i = 0; i < settingJs.google.ga.ids.length; i++) {
		ga('create', settingJs.google.ga.ids[i], 'auto', {'name': 'gaId'+i});
		ga('gaId'+i+'.send', 'pageview');
	};
</script> -->