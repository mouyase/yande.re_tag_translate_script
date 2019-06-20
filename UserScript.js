// ==UserScript==
// @name         Yande.re 标签翻译
// @namespace    https://github.com/4cy/Script-BooruTagCN
// @version      0.2
// @description  汉化Booru类图站的标签
// @author       某亚瑟
// @match        https://yande.re/post*
// @match        https://yande.re.4cy.me/post*
// @match        https://gelbooru.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.js
// ==/UserScript==
(function() {
	'use strict';
	var jQuery = $.noConflict();

	var json = jQuery.ajax({url:"https://raw.githubusercontent.com/mouyase/yande.re_tag_translate_script/master/KeyMap.json",async:false}).responseText;

	var KeyMap = JSON.parse(json);

	function modify() {
		jQuery("ul#tag-sidebar li a").each(function(){
			var obj = jQuery(this);
			if(obj.attr('onmouseover')){
				if (KeyMap.hasOwnProperty(obj.html())) {
					obj.html(KeyMap[obj.html()]+"【"+obj.html()+"】");
				}
			}
		});
		console.log('TAG汉化已完成');
	}

	modify();
})();
