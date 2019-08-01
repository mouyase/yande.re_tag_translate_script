// ==UserScript==
// @name         Booru 图站标签汉化插件
// @namespace    https://github.com/4cy/Script-BooruTagCN
// @version      0.3.3
// @description  Booru 图站标签汉化插件，用于汉化各种图库网站的标签
// @author       某亚瑟
// @match        https://yande.re/*
// @match        https://gelbooru.com/*
// @match        https://konachan.com/*
// @match        https://konachan.net/*
// ==/UserScript==
(function() {
	'use strict';
	var KeyMap = {};

	function modify() {
		$("ul#tag-sidebar li a").each(function(){
			var obj = $(this);
				if (KeyMap.hasOwnProperty(obj.html())) {
					obj.html(KeyMap[obj.html()]+"["+obj.html()+"]");
				}
		});
		console.log('TAG汉化已完成');
	}

	var url = 'https://raw.githubusercontent.com/4cy/Script-BooruTagCN/build/KeyMap.json';
	$.get(url,function(json){
		KeyMap = JSON.parse(json);
		modify();
	}); 
})();
