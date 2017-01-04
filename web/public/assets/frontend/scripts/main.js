var Storage = (function() {
	'use strict';
	return {
		get: get,
		set: set,
		remove: remove,
		clear: clear
	};

	function get(name) {
		var date = new Date(),
		current = Math.round(+date / 1000),
		storedData = JSON.parse(localStorage.getItem(settingJs.appPrefix + '.' + name)) || {},
		storedTime = storedData.storageExpireTime || 0;

		if (storedTime && storedTime < current) {
			remove(settingJs.appPrefix + '.' + name);
			return undefined;
		} else {
			return storedData.store;
		}
	}

	function set(name, value, seconds) {
		var date = new Date(),
		schedule = Math.round((date.setSeconds(date.getSeconds() + seconds)) / 1000),
		data = JSON.stringify({storageExpireTime: schedule, store: value});
		try {
			localStorage.setItem(settingJs.appPrefix + '.' + name, data);
		} catch (e) {
			if (e == QUOTA_EXCEEDED_ERR) {
				alert('Quota exceeded!');
			}
		}

		return data;
	}

	function remove(name) {
		localStorage.removeItem(settingJs.appPrefix + '.' + name);
	}

	function clear() {
		localStorage.clear();
	}
})();
/***************************************************
Description: Scripts for all page
****************************************************/
var mainJs = (function(){
    return {
    };
})();
(function(){
	var mod_menu = $("#mod-menu");
	

})();
(function(){
	'use strict';

	fabric.Object.prototype.originX = 'left';
	fabric.Object.prototype.originY = 'top';
	fabric.Object.prototype.hoverCursor = 'pointer';
	fabric.Object.prototype.transparentCorners = false;
	fabric.Object.prototype.hasControls = false;
	fabric.Object.prototype.hasBorders = false;
	fabric.Object.prototype.hasRotatingPoint = false;
	fabric.Object.prototype.borderColor = 'red';
	fabric.Object.prototype.cornerSize = 8;
	fabric.Object.prototype.cornerColor = 'red';
	fabric.Object.prototype.targetFindTolerance = 4;
	fabric.Object.prototype.preserveObjectStacking = false;
	fabric.Object.prototype.selection = false;
	fabric.Object.prototype.selectable = true;
	fabric.Object.prototype.lockScalingX = false;
	fabric.Object.prototype.lockScalingY = false;

	fabric.Canvas.prototype.getItemsByUnique = function(unique) {
		var all = this.getObjects(), output = [];

		for (var i = 0; i < all.length; i++) {
			if(all[i].unique === unique){
				output.push(all[i]);
			}
		};

		return output;
	}

	fabric.Canvas.prototype.addImage = function(params, callback) {
		fabric.Image.fromURL(params.url, function (oImg) {
			if(typeof callback === 'function'){
				callback(oImg);
			}
		}, params);
	}

	fabric.Canvas.prototype.setImage = function(params) {
		var self = this;
		var items = this.getItemsByUnique(params.unique);

		for (var i = 0; i < items.length; i++) {
			items[i].setSrc(params.url, function(){
				self.renderAll();
			});
		}
	}

	fabric.Canvas.prototype.addText = function(params) {
		var text = new fabric.Text(params.text, params);

		if(!params.memory){
			this.add(text);
		}

		return text;
	}
})();

(function(){
	'use strict';
	var upload = $('#mod-upload');
	var edit = $('#mod-edit');
	var top = 0, left=0;

	if($('#mod-upload').hasClass('baobinh')){
		var canvas = new fabric.Canvas('baobinh', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/phi-cong.png', canvas.renderAll.bind(canvas));
		var top = 70, left=30;
	}
	if($('#mod-upload').hasClass('bachduong')){
		var canvas = new fabric.Canvas('bachduong', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/singer.png', canvas.renderAll.bind(canvas));
		var top = 288, left=125;
	}
	if($('#mod-upload').hasClass('bocap')){
		var canvas = new fabric.Canvas('bocap', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/editor.png', canvas.renderAll.bind(canvas));
		var top = 190, left=90;
	}
	if($('#mod-upload').hasClass('cugiai')){
		var canvas = new fabric.Canvas('cugiai', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/doctor.png', canvas.renderAll.bind(canvas));
		var top = 300, left=400;
	}
	if($('#mod-upload').hasClass('kimnguu')){
		var canvas = new fabric.Canvas('kimnguu', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/luat-su-.png', canvas.renderAll.bind(canvas));
		var top = 115, left=415;
	}
	if($('#mod-upload').hasClass('maket')){
		var canvas = new fabric.Canvas('maket', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/scientist.png', canvas.renderAll.bind(canvas));
		var top = 45, left=125;
	}
	if($('#mod-upload').hasClass('nhanma')){
		var canvas = new fabric.Canvas('nhanma', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/politcist.png', canvas.renderAll.bind(canvas));
		var top = 95, left=45;
	}
	if($('#mod-upload').hasClass('songngu')){
		var canvas = new fabric.Canvas('songngu', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/photo.png', canvas.renderAll.bind(canvas));
		var top = 140, left=40;
	}
	if($('#mod-upload').hasClass('songtu')){
		var canvas = new fabric.Canvas('songtu', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/teacher.png', canvas.renderAll.bind(canvas));
		var top = 300, left=350;
	}
	if($('#mod-upload').hasClass('sutu')){
		var canvas = new fabric.Canvas('sutu', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/designer.png', canvas.renderAll.bind(canvas));
		var top = 180, left=40;
	}
	if($('#mod-upload').hasClass('thienbinh')){
		var canvas = new fabric.Canvas('thienbinh', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/dien-vien.png', canvas.renderAll.bind(canvas));
		var top = 150, left=120;
	}
	if($('#mod-upload').hasClass('xunu')){
		var canvas = new fabric.Canvas('xunu', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/nha-van.png', canvas.renderAll.bind(canvas));
		var top = 45, left=400;
	}
	if($('#mod-upload').hasClass('upload')){
		var top = 222,left = 189;
		var canvas = new fabric.Canvas('canvas', {backgroundColor: '#fff'});
		canvas.setOverlayImage('images/other.png', canvas.renderAll.bind(canvas));
	}


	// fabric.Image.fromURL('images/demo.jpg',{id:'img3'}, function (oImg) {
	// 	canvas.add(oImg);
	// }, {});

	function getObjectById(id) {
		var result;
		canvas.forEachObject(function(o) {
			if (o.id === id) {
				result =o;
			}
		});
		return result;
	}

	function clickEdit(){
		edit.find('#upload-image').click(function(){
			upload.find('#file').click();
			if(!upload.find('#img').hasClass('hide')){
				upload.find('#img').addClass('hide');
				console.log(upload.find('#btn'));
			}
		});
	}
	function clickLoad(){
		upload.find('#load-file').click(function(){
			upload.find('#file').click();
			if(!upload.find('#img').hasClass('hide')){
				upload.find('#img').addClass('hide')
			}
		});
	}
	function loadImage(){
		document.getElementById('file').addEventListener("change", function (e) {
			var removeit = getObjectById('img3');
			canvas.remove(removeit);

			var file = e.target.files[0];
			var reader = new FileReader();
			reader.onload = function (f) {
				var data = f.target.result;
				fabric.Image.fromURL(data, function (img) {
					var oImg = img.set({left:left,top:top, angle: 0, id:'img3'}).scale(0.5);
					canvas.add(oImg).renderAll();
					var a = canvas.setActiveObject(oImg);
					var dataURL = canvas.toDataURL({format: 'jpeg', quality: 0.8});
					oImg.sendToBack();

				});
			};
			reader.readAsDataURL(file);
		});
	}
	function zoomIn(){
		$('#zoomIn').click(function () {

			var object = getObjectById('img3');
			var tempScaleX = object.scaleX  * 1.1;
			var tempScaleY = object.scaleY * 1.1;

			object.scaleX =tempScaleX;
			object.scaleY = tempScaleY;

			object.setCoords();
			canvas.renderAll();
		});
	}
	function zoomOut(){
		$('#zoomOut').click(function () {
			var object = getObjectById('img3');
			var tempScaleX = object.scaleX  / 1.1;
			var tempScaleY = object.scaleY / 1.1;

			object.scaleX =tempScaleX;
			object.scaleY = tempScaleY;

			object.setCoords();
			canvas.renderAll();
		});
	}

	function rotateleft(){
		$('#rotate-left').click(function(){
			var object = getObjectById('img3');
			var curAngle = object.getAngle();
			object.setAngle(curAngle-10);
			canvas.renderAll();
		});
	}

	function rotateright(){
		$('#rotate-right').click(function(){
			var object = getObjectById('img3');
			var curAngle = object.getAngle();
			object.setAngle(curAngle+10);
			canvas.renderAll();
		});
	}

	$(document).ready(function() {
		clickLoad();
		clickEdit();
		loadImage();
		zoomIn();
		zoomOut();
		rotateleft();
		rotateright();
	});
})();