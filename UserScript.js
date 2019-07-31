// ==UserScript==
// @name         Booru 图站标签汉化插件
// @namespace    https://github.com/4cy/Script-BooruTagCN
// @version      0.3.3
// @description  Booru 图站标签汉化插件
// @author       某亚瑟
// @match        https://yande.re/*
// @match        https://gelbooru.com/*
// @match        https://konachan.com/*
// @match        https://konachan.net/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.js
// ==/UserScript==
(function() {
	'use strict';
	var jQuery = $.noConflict();
	
	var KeyMap ={};

	function modify() {
		jQuery("ul#tag-sidebar li a").each(function(){
			var obj = jQuery(this);
				if (KeyMap.hasOwnProperty(obj.html())) {
					obj.html(KeyMap[obj.html()]+"【"+obj.html()+"】");
				}
		});
		console.log('TAG汉化已完成');
	}

	var url = 'https://raw.githubusercontent.com/4cy/Script-BooruTagCN/build/KeyMap.json';
	jQuery.get(url,function(json){  
		KeyMap = JSON.parse(json);
		modify();
	}); 

})();
