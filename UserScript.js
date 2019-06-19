// ==UserScript==
// @name         Yande.re 标签翻译
// @namespace    https://github.com/mouyase/yande.re_tag_translate_script
// @version      0.1
// @description  翻译Booru类图站
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

	modifyHtml();

	function modifyHtml() {
		var keymap=jQuery.ajax({url:"https://raw.githubusercontent.com/mouyase/yande.re_tag_translate_script/dev/KeyMap",async:false}).responseText;
	}
})();
