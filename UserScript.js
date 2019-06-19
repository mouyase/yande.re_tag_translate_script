// ==UserScript==
// @name         Yande.re 标签翻译
// @namespace    https://github.com/mouyase/yande.re_tag_translate_script
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
	var KeyMap = {};

	function add(key,value) {
		KeyMap[key] = value;
	}

	keymap=document.createElement("script");
	keymap.setAttribute("type","text/javascript");
	keymap.setAttribute("src","https://raw.githubusercontent.com/mouyase/yande.re_tag_translate_script/master/KeyMap.js");// 在这里引入了a.js
	document.body.appendChild(keymap);

	function modifyHtml() {
		jQuery("ul#tag-sidebar li a").each(function(){
			var obj = jQuery(this);
			if(obj.attr('onmouseover')){
				if (KeyMap.hasOwnProperty(obj.html())) {
					obj.html(KeyMap[obj.html()]+"【"+obj.html()+"】");
				}
			}
		});
		console.log('TAG汉化已完成');
		var json = 	JSON.stringify(KeyMap);
		console.log(json);
	}

	modifyHtml();
})();
