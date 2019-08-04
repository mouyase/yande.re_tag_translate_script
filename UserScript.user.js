// ==UserScript==
// @name         Booru 图站标签汉化插件
// @namespace    https://github.com/mouyase/Script-BooruTagCN
// @version      0.3.4
// @description  Booru 图站标签汉化插件，用于汉化各种图库网站的标签
// @author       某亚瑟
// @match        https://yande.re/*
// @match        https://gelbooru.com/*
// @match        https://konachan.com/*
// @match        https://konachan.net/*
// ==/UserScript==
(function() {
	'use strict';

	function modify() {
		jQuery("ul#tag-sidebar li a").each(function(){
			var obj = jQuery(this);
			var tag = decodeURIComponent(obj.attr('href')).split("tags=")[1];
			if(tag){
				if (tag.indexOf("-")==-1&&tag.indexOf("+")==-1&&tag.indexOf("?")==-1) {
					var url = 'https://tags.4cy.me/'+window.btoa(tag);
					console.log(url);
					jQuery.get(url,function(translate){
						obj.html(translate);
					});
				}
			}
		});
		console.log('TAG汉化已完成');
	}

	modify();
})();