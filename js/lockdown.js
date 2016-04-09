"use strict";

var com = com || {};
com.lockdown = {};

$(document).ready(function(){
    com.lockdown.model.init();
    com.lockdown.view.init();
    com.lockdown.controller.init();
});

com.lockdown.model = (function() {
	return {
		init: function(){
			console.log("model");
		}
	};
})();

com.lockdown.view = (function() {
	return {
		init: function(){
			console.log("view");
		}
	};
})();

com.lockdown.controller = (function() {
	return {
		init: function(){
			console.log("controller");
		}
	};
})();

