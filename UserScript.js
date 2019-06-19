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

	modifyHtml();

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
	}

	add('girls frontline','少女前线');
	add('suomi kp31 (girls frontline)','索米KP31（少女前线）');
	add('animal ears','兽耳');
	add('maid','女仆');
	add('thighhighs','过膝袜');
	add('pantsu','胖次');
	add('loli','萝莉');
	add('pussy juice','妹汁');
	add('panty pull','半脱胖次');
	add('pussy','小穴');
	add('bra','胸罩');
	add('sex','性交');
	add('feet','脚');
	add('girls und panzer','少女与战车');
	add('girls und panzer gekijouban','少女与战车剧场版');
	add('ass grab','抓屁股');
	add('censored','骑兵');
	add('cleavage','事业线');
	add('nipples','乳头');
	add('seifuku','制服');
	add('dress','连衣裙');
	add('ass','屁股');
	add('bikini','比基尼');
	add('sword','剑');
	add('penis','杰宝');
	add('anus','菊花');
	add('nopan','没有胖次');
	add('no bra','没有胸罩');
	add('uncensored','步兵');
	add('paizuri','乳交');
	add('naked','裸体');
	add('bathing','洗澡');
	add('the idolm@ster','偶像大师');
	add('the idolm@ster cinderella girls','偶像大师灰姑娘女孩');
	add('see through','透视');
	add('stockings','吊带丝袜');
	add('breasts','乳房');
	add('bondage','束缚');
	add('wedding dress','婚纱');
	add('fate/grand order','Fate：冠位指定');
})();
