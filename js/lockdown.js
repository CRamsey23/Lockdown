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
	var class_game_container = "game-container";

	var class_color_primary = "color-primary-0";
	var class_color_secondary = "color-secondary-1-0";
	var class_color_tertiary = "color-secondary-2-0";

	var class_background_color_primary = "background-color-primary-0";
	var class_background_color_secondary = "background-color-secondary-1-0";
	var class_background_color_tertiary = "background-color-secondary-2-0";

	return {

		gameframe: function() {
			var gameframe_html = "<div class=\"" + [class_game_container,class_background_color_primary].join(" ") + "\">";


			return gameframe_html + "</div>";
		},


		init: function(){
			console.log("view");

			var HTML = this.gameframe();

			$("body").html(HTML);
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

